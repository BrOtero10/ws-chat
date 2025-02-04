import { useEffect, useState } from "react";
import penIcon from '/pen-icon.svg';
import "./styles.css";

export default function ProfileInfo({ userData, editable = false }) {

    const [ isEditing, setIsEditing ] = useState(false);

    const [editValues, setEditValues] = useState({
        name: userData?.name,
        birthday: userData?.birthday.split('T')[0],
        bio: userData?.bio
    })

    useEffect(() => {
        setEditValues({
            name: userData?.name,
            birthday: userData?.birthday.split('T')[0],
            bio: userData?.bio
        })
    }, [userData])

    const handleEdit = (e) => {
        console.log(e.target.value)
        setEditValues(prev => {
            return {
                ...prev, [e.target.name]: e.target.value
            }
        })
    } 

    function formatDate(date = '') {
        const splitedData = date.split('T')[0].split('-');
        return `${splitedData[2] < 10 ? `0${splitedData[2]}` : splitedData[2]}/${splitedData[1] < 10 ? `0${splitedData[1]}` : splitedData[1]}/${splitedData[0]}`
    }

    return (
        <div className="profile-info">
            <div>
                <p className="name">Nome: 
                    { isEditing ? <input name="name" value={editValues.name} onChange={handleEdit} />
                    : <span className="user-data">{userData?.name}</span> }
                </p>
                <p className="birthday">Data de nascimento: 
                    { isEditing ? <input type="date" name="birthday" value={editValues.birthday} onChange={handleEdit} />
                    : <span className="user-data">{formatDate(userData?.birthday)}</span> }
                </p>     
           </div>
            <div style={{ position: 'relative' }}>
                <p className="bio">Bio: 
                    { isEditing ? <textarea name="bio" value={editValues.bio} onChange={handleEdit} />
                    : <span className="user-data">{userData?.bio}</span> }
                </p>
                { editable && 
                    isEditing ? <FaCheck /> 
                    : <img className="edit" src={penIcon} onClick={() => setIsEditing(!isEditing)}/> 
                }
            </div>
        </div>
    )
}