from simplet5 import SimpleT5
data = """This event focuses on Google’s efforts around disability inclusion and accessibility, along with a glimpse on how we hire and the type of opportunities available. You’ll also hear about how Google is committed to building a work environment where all employees feel belonged! """

model = SimpleT5()
model.load_model("t5", "outputs/simplet5-epoch-2-train-loss-0.8114-val-loss-1.4894", use_gpu=True)
op = model.predict("summarize: " + data)
print(op)