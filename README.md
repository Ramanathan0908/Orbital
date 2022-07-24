# toomanywords

This project is an Artificial Intelligence-powered automatic text summary webapp.

## Installation
0. Ensure `node` and `yarn` are installed on your machine.
    * `node` installation for [Windows/Mac](https://nodejs.org/en/download/)
    * `node` installation for [Ubuntu](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)
    * [`yarn` installation](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

1. Clone this repo with:
```
git clone https://github.com/Ramanathan0908/Orbital.git
```

2. Install yarn packages with:
```
yarn install
```

3. Install required python packages
```
python3 -m pip install -r requirements.txt
```

## Usage

1. Navigate to the `backend` folder with:
```
$ cd backend
```

2. Start the backend with:
```
$ flask run --port=6969
```

3. **In another terminal window**, navigate to the repo folder and start the App with:
```
$ yarn start
```

4. Enter login details. (The sign-in feature is currently incomplete so use the following username and password):

```
Username: foo@bar.com
Password: password
```
![login](https://i.ibb.co/2nf61yg/login.png)

5. Choose the word limit for the summary.

![wordlimit](https://i.ibb.co/LSJR4jr/wordlimit.png)

6. Choose the type of text to be summarised from the drop-down list.

![type](https://i.ibb.co/Wyz5PP1/type.png)

7. Type your input text into the text box and hit the SUMMARIZE button.

![summarise](https://i.ibb.co/kKqqPVK/summarise.png)

8. Hit the CLEAR button to reset or hit the CREATE button to save.

9. When saving, enter the title of that summary.

![save](https://i.ibb.co/1mNpQGd/save.png)

10. Click the icon in the top left and go to `Saved Summaries` in the sidebar to view the previous saved summaries.

![view](https://i.ibb.co/TtmLFPS/view.png)

## Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The summariser utilises pretrained models from [Hugging Face Transformers](https://github.com/huggingface/transformers)
