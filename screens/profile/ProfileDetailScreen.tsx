import React from 'react'
import CoreText from '../../components/core/CoreText'
import CoreView from '../../components/core/CoreView'
import Header from '../../components/header/Header'

const ProfileScreen: React.FC = props => {
  return (
    <CoreView>
      <Header />
      <CoreText>Profile</CoreText>
    </CoreView>
  )
}

export default ProfileScreen
