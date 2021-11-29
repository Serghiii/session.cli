import React from 'react'
import type { NextPage } from 'next'
import { default as cn } from 'classnames';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAuthAction, LoginStatusAction, LogOutAuthAction } from "../redux/authaction"

const Home: NextPage = () => {
  const { locale } = useRouter()
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);
  const autherr = useSelector((state: any) => state.autherror);

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handlerUsernameChange = (e: any) => {
    setUsername(e.target.value)
  }

  const handlerPasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  const handlerLoginClick = () => {
    dispatch(LoginAuthAction({
      username: username,
      password: password
    }));
  }

  const handleExitClick = () => {
    dispatch(LogOutAuthAction());
  }

  const ButtonExit = () => {
    return (
      <button className='hover:bg-gray-400 bg-gray-500 text-white p-2 rounded text-sm w-auto' onClick={handleExitClick}>Вихід</button>
    )
  }

  React.useEffect(() => {
    dispatch(LoginStatusAction());
  }, [])

  return (
    <>
      <Head>
        <title>Session</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col mx-auto min-h-screen w-full max-w-screen-xl overflow-hidden">
        <header>
          <div className="bg-white">
            <div className="mx-auto w-full max-w-[400px] min-w-[200px] px-6 py-4">
              <div className='flex justify-center'>
                <p>Форма авторизації</p>
              </div>
              <div className='flex justify-end'>
                {auth.isLoggedIn && <ButtonExit />}
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          <div className="bg-white">
            <div className="mx-auto w-full max-w-[400px] min-w-[200px] bg-gray-100 shadow-lg p-4">
              <div className='space-y-4'>
                <div className="form-row">
                  <label htmlFor="auth-login" className="form-label">Логін:</label>
                  <input
                    id="auth-login"
                    className="w-full focus:outline-none focus:border-indigo-500 border border-gray-300 rounded-md"
                    type="text"
                    value={username}
                    maxLength={50}
                    onChange={handlerUsernameChange}
                  />
                  <div className="error-row">
                    {<p className="error-message"></p>}
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="auth-pass" className="form-label">Пароль:</label>
                  <input
                    id="auth-pass"
                    className={cn("w-full focus:outline-none border rounded-md",
                      { [`border-${autherr.message && !auth.isLoggedIn ? 'red-500' : 'gray-300'}`]: true }
                    )}
                    type="password"
                    value={password}
                    maxLength={500}
                    onChange={handlerPasswordChange}
                  />
                  <div className="error-row">
                    {<p className="error-message"></p>}
                  </div>
                </div>
                <span className="text-xs text-red-500">{(autherr.message && !auth.isLoggedIn) ? autherr.message : ''}</span>
                <div className='flex'>
                  <button className='mx-auto hover:bg-yellow-400 bg-yellow-500 text-white p-2 rounded text-lg w-auto' onClick={handlerLoginClick}>Авторизуватися</button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="mx-auto px-6 py-4">
          <p>@2021</p>
        </footer>

      </div>
    </>
  )
}

export default Home
