'use client'
import './style.css'

import { useState } from 'react';

export default function page() {
  const [buttonText, setButtonText] = useState("Click to open your present!");
  const [hasSentMessage, setHasSentMessage] = useState(false);

  const handleOpenPresent = async () => {
    if (hasSentMessage) return;
    setHasSentMessage(true);
    setButtonText("Present sent...");
    fetch('https://textbelt.com/text', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: process.env.NEXT_PUBLIC_NUMBER,
        message: process.env.NEXT_PUBLIC_MESSAGE,
        key: process.env.NEXT_PUBLIC_TEXTBELT_API_KEY,
      }),
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
    });

    setTimeout(() => {
      setButtonText("...maybe you should check your phone?");
    }, 5000)

    setTimeout(() => {
      setButtonText("I love you! xxx");
    }, 10000)
  }

  return (
    <div className='box'>
      <img alt='bugcat yayyy' className='image' src='/bugcat-yay.gif' />
      <h3>I love you bubba!</h3>
      <img src="/che_and_rhi.png" className="image" />
      <button onClick={handleOpenPresent}>
        {buttonText}
      </button>
    </div>
  )

}