import React from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'

export default function VoiceRecorder (props) {
    const recorderControls = useAudioRecorder()
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob)
        const audio = document.createElement("audio")
        const recContainer = document.getElementById("recordings-container")
        
        audio.src = url
        audio.controls = true
        
        // Show only the three most recent recordings:
        recContainer.appendChild(audio)
        let numChildren = recContainer.childElementCount
        if (numChildren > 3) {
            let recordings = recContainer.getElementsByTagName('audio')
            recContainer.removeChild(recordings[0])
        }
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