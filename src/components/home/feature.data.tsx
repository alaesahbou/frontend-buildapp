import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
      title: 'Connect',
      description: 'Connect your e-commerce platform, whether it\'s Shopify, WooCommerce, or YouCan, seamlessly with our app builder',
      icon: <ArtTrackIcon />,
    },
    {
      title: 'Build',
      description: 'Build your own customized mobile app without coding using our selection of beautiful templates and intuitive customization tools',
      icon: <AttachMoneyIcon />,
    },
    {
      title: 'Deploy',
      description: 'Deploy your app to the app store and play store with just a few clicks, and share it with your customers to enhance their shopping experience',
      icon: <LocalLibraryIcon />,
    },
    {
      title: 'Launch',
      description: 'Launch your app and watch your sales grow with the power of mobile commerce at your fingertips',
      icon: <ContactSupportIcon />,
    },  
]
