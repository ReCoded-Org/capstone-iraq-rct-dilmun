import React, { useState, useEffect } from 'react'
import { Modal, ModalTransition } from 'react-simple-hook-modal'
import { useDispatch } from 'react-redux'
import 'react-simple-hook-modal/dist/styles.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from '../../firebase'
import { LogIn } from '../../redux/Authentication/AuthenticationActions'

export default function Login() {
  const dispatch = useDispatch()
  const [isModalOpen, setisModalOpen] = useState(false)

  const uiConfig = {
    signInflow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => {
        setisModalOpen(false)
      },
    },
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const LogedInUser = {
          uui: user.uid,
          email: user.email,
          photo: user.photoURL,
          name: user.providerData[0].displayName,
        }
        localStorage.setItem('loggedInUser', JSON.stringify(LogedInUser))
        dispatch(LogIn(LogedInUser))
      }
    })
  }, [])

  return (
    <>
      <button
        type="button"
        className="py-1 px-3 bg-darkBlue  items-center  rounded-full text-white m-1    focus:outline-none"
        onClick={() => setisModalOpen(true)}
      >
        Log In
      </button>

      <Modal
        id="any-unique-identifier"
        isOpen={isModalOpen}
        transition={ModalTransition.BOTTOM_UP}
      >
        <div className="grid grid-cols-1  grid-rows-3">
          <div className="grid grid-flow-col items-center  border-b border-grey pb-2 mb-3 ">
            <h1 className="font-black text-xl">Log In</h1>
            <button
              type="button"
              className="border border-grey shadow-md hover:shadow-inner focus:outline-none  transition duration-700 ease-in-out text-grey font-semibold hover:text-red py-2 px-4 rounded justify-self-end"
              onClick={() => setisModalOpen(false)}
            >
              x
            </button>
          </div>
          <div className="row-span-2 m-auto  ">
            <h6 className="font-medium text-center">
              Sign Up to start donating and / or sell what you don’t need
            </h6>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
