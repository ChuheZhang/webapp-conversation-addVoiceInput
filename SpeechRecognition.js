// SpeechRecognition.js

import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognitionComponent = ({ insertText }) => {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const handleStart = () => {
        SpeechRecognition.startListening();
    };

    const handleStop = () => {
        SpeechRecognition.stopListening();
        insertText(transcript); // 将识别结果插入到文本框
        resetTranscript(); // 重置识别结果
    };

    if (!browserSupportsSpeechRecognition) {
        return <div>该浏览器不支持语音识别功能</div>;
    }

    return (
        <div>
            <button onClick={handleStart}>启动语音识别</button>
            <button onClick={handleStop}>停止语音识别</button>
        </div>
    );
};

export default SpeechRecognitionComponent;
