[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/bukotsunikki.svg?style=social&label=Follow%20%40jyoung424242)](https://twitter.com/jyoung424242)

<h4 align="center">Typescpript Project that creates a sequencing class around the Web Animations API</h4>

![Screenshot](/sequencerscreenshot.PNG?raw=true 'Screenshot')

# 👋 Introducing `Web Animations API Sequencer`

`Web Animations API Sequencer` is an simple .ts library file (sequencer.ts) that provides access to methods to build a sequence of different WAAPI animations that can run the one after another, with controls over looping, and delays between animations.

<!--
# Demo on Youtube
 - https://youtu.be/m1zYOhrmdKk    Javascript example
 - https://youtu.be/IRboPZac_Q8    Typescript example -->

# 🔥 Features

`Web Animations API Sequencer` comes with a bundle of features already. You can do the followings with it,

## 🔢 setup sequence of different animations

```ts
seq1.addSeq({
    element: myBox,
    keyFrames: [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }],
    options: { duration: 2000, easing: 'ease-in-out', iterations: 1 },
}).addSeq({
    element: myBox,
    keyFrames: [{ backgroundColor: `white` }, { backgroundColor: `blue` }, { backgroundColor: `pink` }],
    options: { duration: 2000, easing: 'ease-in-out', iterations: 1 },
});
```

## 🏗️ Have the animation sequence run once, or continuous loop

## 📢 Have time delays (in ms) between the different sequences

```ts
let seq1 = new waApiSequencer({
    loop: true,
    gapDelay: 0,
});
```

## 💘 constructor params

pass a SequenceOption type to the constuctor

```ts
type SequenceOptions = {
    loop: boolean;
    gapDelay: number;
};

constructor(args: SequenceOptions) {
        ...
    }
```

## ✨ Utilizes WAAPI animations to control elements

    [API reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API/)

-   Utilizes a SequenceObject Type to setup WAAPI animations

```ts
type SequenceObject = {
    element: HTMLElement | string;
    keyFrames: Keyframe[];
    options: KeyframeAnimationOptions;
};
```

-   element property can accept DOM element id string, or be passed DOM element directly
-   keyFrames is array of animation property KeyFrames that are being animated
    -   example: transform, opacity, boxShadow,
    -   keyFrames requires at least two entries, start and end KeyFrame states
-   options property is list of animation options in key value pairs
    `options: { delay: 750, duration: 750, easing: 'ease-in-out', iterations: 1 }`

## 🔍 Usage, and Methods of API

-   primary methods to be used are the addSeq() and runSeq(), for executing the animations
-   also available are pauseSeq(), resumeSeq(), resetSeq(), and cancelSeq() for sequence control
    addSeq() takes a SequenceObject as primary arguement

-   Usage:

```ts
//import library
import { waApiSequencer } from './lib/sequencer';

//instantiate class with a SequenceOption arguement
let seq1 = new waApiSequencer({
    loop: true,
    gapDelay: 0,
});

//add sequences to the class with .addSeq(), passing in SequenceObjects
seq1.addSeq({
    element: myBox,
    keyFrames: [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }],
    options: { duration: 2000, easing: 'ease-in-out', iterations: 1 },
}).addSeq({
    element: myBox,
    keyFrames: [{ backgroundColor: `white` }, { backgroundColor: `blue` }, { backgroundColor: `pink` }],
    options: { duration: 2000, easing: 'ease-in-out', iterations: 1 },
});

//run the sequence with the playSeq() method
seq1.playSeq();
```
