import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
    <div class='gradient__bg'>
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="ChatGPT-3 is a large, pre-trained language model developed by OpenAI. It is designed to generate human-like text, and can be fine-tuned for a variety of natural language processing tasks, such as conversation, language translation, and text summarization. It is considered one of the most advanced language models available today." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <a href='https://openai.com/'>Explore HERE !!!</a>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="GPT-3 chatbot is a conversational AI model that can generate human-like responses to text-based inputs. It uses the GPT-3 language model, which has been fine-tuned for the task of conversation. It can be used in chat applications, virtual assistants, and other similar systems." />
                <Feature title="Knowledgebase" text="ChatGPT is a language model that is trained on a large dataset of text to generate human-like responses. The dataset includes a wide range of text from various sources, likely including publicly available text and proprietary data. The exact size and specifics of the dataset is not publicly disclosed. The goal of using such a large dataset is to train the model to understand and generate a wide range of language." />
                <Feature title="Education" text="ChatGPT can be used in various ways in education, such as creating an AI-powered virtual tutor, evaluating student essays, helping students with their language skills, generating educational content, automating assessment, and providing personalized learning experiences. It can be used to answer questions, provide explanations, grade student responses, and tailor content to the student's needs and abilities. It uses its ability to understand and generate human-like language to make it an effective tool in the education field." />
            </div>
        </div>
    </div>
);

export default WhatGPT3;