import pandas as pd
from sklearn.model_selection import train_test_split
from simplet5 import SimpleT5

    
path = "https://raw.githubusercontent.com/Shivanandroy/T5-Finetuning-PyTorch/main/data/news_summary.csv"
df = pd.read_csv(path)

df = df.rename(columns={"headlines":"target_text", "text":"source_text"})
df = df[['source_text', 'target_text']]

df['source_text'] = "summarize: " + df['source_text']

train_df, test_df = train_test_split(df, test_size=0.2)

model = SimpleT5()
model.from_pretrained(model_type="t5", model_name="t5-base")

model.train(train_df=train_df[:5000],
            eval_df=test_df[:100], 
            source_max_token_len=128, 
            target_max_token_len=50, 
            batch_size=2, max_epochs=3, use_gpu=True)