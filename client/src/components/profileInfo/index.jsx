import { useEffect, useState } from "react";
import "./styles.css";
import { fetchUser } from "../../services/users";

export default function ProfileInfo({ userData }) {

    const user = {
        name: "Bruno Otero",
        age: 20,
        birthday: '2004-12-10',
        bio: 'Sou um jovem de 20 anos, estudante de Análise e Desenvolvimento de Sistemas, pelo Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, campus Pirituba.'
    }

    function formatDate(date) {
        const splitedData = date.split('-');
        return `${splitedData[2] < 10 ? `0${splitedData[2]}` : splitedData[2]}/${splitedData[1] < 10 ? `0${splitedData[1]}` : splitedData[1]}/${splitedData[0]}`
    }

    return (
        <div className="profile-info">
            <div>
                <p className="name">Nome: <span className="user-data">{user.name}</span></p>
                <p className="age">Idade: <span className="user-data">{user.age}</span></p>
                <p className="birthday">Data de nascimento: <span className="user-data">{formatDate(userData?.birthday || "")}</span></p>     
           </div>
            <div>
                <p className="bio">Bio: <span className="user-data">{user.bio}</span></p>
                
            </div>
        </div>
    )
}