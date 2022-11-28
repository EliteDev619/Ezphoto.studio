import React, { useState } from "react";
import Link from 'next/link'

const Login = ({ setUsername }) => {
  const [showModal, setShowModal] = useState(false);
  const [tmpUsername, setTmpUsername] = useState('');
  const [tmpPasword, setTmpPassword] = useState('');
  const [tmpSubmitFlag, setSubmitFlag] = useState(false);

  const handleLoginSubmit = () => {
    setShowModal(false);
    setSubmitFlag(true);
    setUsername(tmpUsername)
  }

  const handleLogout = () => {
    setSubmitFlag(false);
    setUsername('')
  }

  return (
    <>
      {
        (tmpUsername == 'admin' && tmpSubmitFlag ?
          <Link href="/" passHref><button
            className="bg-[#f3e8e8a8] border-b-4 border-l-2 text-black active:bg-gray-500 
      font-bold fixed top-36 z-10 right-0 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => handleLogout()}
          >
            Logout
          </button></Link> :
          <button
            className="bg-[#ffffff70] border-b-4 border-l-2 text-black active:bg-gray-500 
      font-bold fixed top-36 z-10 right-0 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        )
      }
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-200  outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid bg-gray-200  rounded-t ">
                  <h3 className="text-3xl font=semibold">Login</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200  shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      UserName
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={e => setTmpUsername(e.target.value)} required='' />
                    <label className="block text-black text-sm font-bold mb-1">
                      Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" required='' type='password' onChange={e => setTmpPassword(e.target.value)} />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-gray-500 active:bg-gray-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => handleLoginSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Login;