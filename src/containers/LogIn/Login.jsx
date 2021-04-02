import React from 'react'
import { Modal, ModalTransition } from 'react-simple-hook-modal'
import { useDispatch, useSelector } from 'react-redux'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from '../../firebase'
import { LogIn } from '../../redux/Authentication/AuthenticationActions'
import * as ModalActions from '../../redux/LoginModal/ModalActions'
import 'react-simple-hook-modal/dist/styles.css'

export default function Login() {
  const isModalOpen = useSelector(state => state.modal)

  const dispatch = useDispatch()

  const uiConfig = {
    signInflow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => {
        dispatch(ModalActions.CloseModal())
      },
    },
  }

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

  return (
    <>
      <Modal
        id="any-unique-identifier"
        isOpen={isModalOpen.state}
        transition={ModalTransition.BOTTOM_UP}
      >
        <div className="grid grid-cols-1  grid-rows-3">
          <div className="grid grid-flow-col items-center  border-b border-grey pb-2 mb-3 ">
            <h1 className="font-black text-xl">Log In</h1>
            <button
              type="button"
              className="border border-grey shadow-md hover:shadow-inner focus:outline-none  transition duration-700 ease-in-out text-grey font-semibold hover:text-red py-2 px-4 rounded justify-self-end"
              onClick={() => dispatch(ModalActions.CloseModal())}
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