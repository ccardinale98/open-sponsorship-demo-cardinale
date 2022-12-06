import React, { useState } from 'react'
import './Form.css';
import { BasicInfo } from '../../components/BasicInfo/BasicInfo';
import { About } from '../../components/About/About';
import { Summary } from '../../components/Summary/Summary';
import axios from 'axios';

export function Form({ changePage }) {
    const [step, setStep] = useState(0);
    const [info, setInfo] = useState({
        name: '',
        sport: '',
        gender: '',
        birth: '',
        description: '',
        location: '',
        team: '',
    });
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(true)

    function handleClick(direction) {
        if (direction == 0) {
            setStep(step - 1);
            setDisabled(false);
            setError("");
        } else {
            setStep(step + 1); 
            setDisabled(true);
            setError("");
        }
    }

    function handleInfo(property, formInfo) {
        const currentInfo = info;
        currentInfo[property] = formInfo;
        setInfo(currentInfo);
        if (step == 0) {
            if (info.name == "" || info.sport == "" || info.gender == "" || info.birth == "") {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
        } else {
            if (info.description == "" || info.location == "" || info.team == "") {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
        }
        console.log(info)
    }

    async function submit() {
        console.log(info)
        try {
            const post = await axios.post('/api/athlete/', info)
            console.log(post);
            changePage("list");
        } catch (err) {
            setError("There was an error submitting your application.")
            console.log(err)
        }
    }

    return (
        <div className='containerDiv'>
            <div className='formDiv'>
            <header>
                <h1>Athlete Info</h1>
            </header>
            { step == 0 
                ? <BasicInfo info={info} handleInfo={handleInfo} /> 
                : step == 1 ? <About info={info} handleInfo={handleInfo} /> 
                : <Summary info={info} />
            }
            <footer>
                { error !== "" 
                    ? <div class="alert alert-danger" role="alert">{error}</div>
                    : <></>
                }
                { step > 0 
                    ? <button className="btn btn-primary submit" onClick={() => handleClick(0)}>Back</button> 
                    : <></> 
                }
                { step == 2 
                    ? <button className="btn btn-primary submit" onClick={() => submit()}>Submit</button> 
                    : <button className="btn btn-primary submit" disabled={disabled} onClick={() => handleClick(1)}>Next</button> 
                }
            </footer>
            </div>
        </div>
    )
}