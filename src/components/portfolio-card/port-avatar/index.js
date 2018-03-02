import React from 'react'

import Avatar from '../../avatar'

const AntPath = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/ant.png?alt=media&token=23c8c064-1fe2-4a97-9abc-e709fec40647'
const ExpoPath = 'http://imgf.downloadapk.net/f/73/b71075_150.png'
const ExpressPath = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/express.png?alt=media&token=d6607f5f-693f-4210-aca1-04304788d809'
const FirebasePath = 'https://pbs.twimg.com/profile_images/733010550670557184/aMmM_m3g.jpg'
const GraphqlPath = 'http://drupal.sh/sites/default/files/styles/large/public/2016-06/graphql.jpg?itok=bAWB8IYo'
const NodePath = 'https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage1.png'
const PhotoshopPath = 'https://ih1.redbubble.net/image.231864847.1593/flat,800x800,075,f.u10.jpg'
const ReactPath = 'http://www.technoscore.com/images/services/react-js-icon.png'
const ReactNativePath = 'https://cdn.rawgit.com/lucasbento/react-native-actions/master/common/media/logo.png'
const ReactNavigationPath = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/reactnav.png?alt=media&token=744f63e5-7741-49f2-bc3f-e71bcf92c2af'
const ReactRouterPath = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/router.png?alt=media&token=c919268a-7a78-49ec-8af0-d419dca3fe12'
const ReduxPath = 'https://www.valentinog.com/blog/wp-content/uploads/2017/12/redux-logo.png'
const RubyPath = 'http://rails-workshop.elpasowebdevelopment.com/assets/rails_logo-b61018462f8f9a92bc4465e5416e4c47.png'

const findPath = (type) => {
  switch (type.replace(/\s/g, '').toLowerCase()) {
    case 'antdesign':
      return AntPath

    case 'expo':
      return ExpoPath

    case 'express':
      return ExpressPath

    case 'firebase':
      return FirebasePath

    case 'graphql':
      return GraphqlPath

    case 'node':
      return NodePath

    case 'photoshop':
      return PhotoshopPath
    case 'react':
      return ReactPath

    case 'reactnative':
      return ReactNativePath

    case 'reactnavigation':
      return ReactNavigationPath

    case 'reactrouter':
      return ReactRouterPath

    case 'redux':
      return ReduxPath

    case 'rubyonrails':
      return RubyPath

    default:
      return null

  }
}

const PortfolioAvatar = ({ size, type }) => (
  <Avatar
    path={findPath(type)}
    type={size}
  />
)

export default PortfolioAvatar
