import React from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'

export default function VoiceRecorder (props) {
    const recorderControls = useAudioRecorder()
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob)
        const audio = document.createElement("audio")
        audio.src = url
        audio.controls = true
        document.getElementById("q-container").appendChild(audio)
      }

      React.useEffect(() => {
        if (props.userSpeaking){
            recorderControls.startRecording()
        }
      }, [props.userSpeaking]) 

      React.useEffect(() => {
        if (!props.userSpeaking){
            recorderControls.stopRecording()
        }
      }, [props.userSpeaking]) 
        


    return (
        <div>
            <AudioRecorder
                id="voicerec" 
                onRecordingComplete={(blob) => addAudioElement(blob)}
                recorderControls={recorderControls} 
            />
        </div>
    )
}