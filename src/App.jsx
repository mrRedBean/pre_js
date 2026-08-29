import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Profile from "./compornents/button"

function App() {

    const myname = "山田太郎"
    const age = 20
    const job = "大学生"
    const birthplace = "愛知県"
    const hobby = "ゲーム"
    const favoriteFood = "ラーメン"
    const favoriteSport = "サッカー"
    const favoriteColor = "青"
    const email = "example@example.com"
    const introduction = "よろしくお願いします！"

    return (
        <BrowserRouter>
            <Routes>
                {/* Ctrl + Alt + PgDn複数編集 */}
                <Profile
                myname={myname}
                age={age}
                job={job}
                birthplace={birthplace}
                hobby={hobby}
                favoriteFood={favoriteFood}
                favoriteSport={favoriteSport}
                favoriteColor={favoriteColor}
                email={email}
                introduction={introduction}
                />
            </Routes>
        </BrowserRouter>
    )
};
export default App;