import React from 'react'

import { PopAvatar } from '../../avatar'

const AntPath = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/ant.png?alt=media&token=23c8c064-1fe2-4a97-9abc-e709fec40647'
const AppiumPath = 'https://seeklogo.com/images/A/appium-logo-2AB368AF4A-seeklogo.com.png'
const ExpoPath = 'http://imgf.downloadapk.net/f/73/b71075_150.png'
const ExpressPath = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/express.png?alt=media&token=d6607f5f-693f-4210-aca1-04304788d809'
const FirebasePath = 'https://pbs.twimg.com/profile_images/733010550670557184/aMmM_m3g.jpg'
const GraphqlPath = 'http://drupal.sh/sites/default/files/styles/large/public/2016-06/graphql.jpg?itok=bAWB8IYo'
const JavaPath = 'https://mblayman.files.wordpress.com/2013/10/java-logo.jpg'
const JavascriptPath = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
const JenkinsPath = 'https://www.silicon.fr/wp-content/uploads/2014/09/jenkins.png'
const MavenPath = 'http://roufid.com/wp-content/uploads/2016/05/eyecatch-maven.png'
const NodePath = 'https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage1.png'
const PhotoshopPath = 'https://ih1.redbubble.net/image.231864847.1593/flat,800x800,075,f.u10.jpg'
const ReactPath = 'http://www.technoscore.com/images/services/react-js-icon.png'
const ReactNativePath = 'https://cdn.rawgit.com/lucasbento/react-native-actions/master/common/media/logo.png'
const ReactNavigationPath = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/reactnav.png?alt=media&token=744f63e5-7741-49f2-bc3f-e71bcf92c2af'
const ReactRouterPath = 'https://firebasestorage.googleapis.com/v0/b/dp-app-2b9c3.appspot.com/o/router.png?alt=media&token=c919268a-7a78-49ec-8af0-d419dca3fe12'
const ReduxPath = 'https://www.valentinog.com/blog/wp-content/uploads/2017/12/redux-logo.png'
const RubyPath = 'https://ih0.redbubble.net/image.224255999.3907/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u1.jpg'
const SeleniumPath = 'https://www.3pillarglobal.com/wp-content/uploads/2015/11/xselenium_logo_320x260-300x260.jpg.pagespeed.ic.aqA1rifk_N.jpg'
const TestNGPath = 'https://xebialabs.com/assets/files/plugins/testNG.jpg'

const findPath = (type) => {
  switch (type.replace(/\s/g, '').toLowerCase()) {
    case 'antdesign':
      return AntPath

    case 'appium':
      return AppiumPath

    case 'expo':
      return ExpoPath

    case 'express':
      return ExpressPath

    case 'firebase':
      return FirebasePath

    case 'graphql':
      return GraphqlPath

    case 'java':
      return JavaPath

    case 'javascript':
      return JavascriptPath

    case 'jenkins':
      return JenkinsPath

    case 'maven':
      return MavenPath

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

    case 'selenium':
      return SeleniumPath

    case 'testng':
      return TestNGPath

    default:
      return null

  }
}

const PortfolioAvatar = ({ size, type }) => (
  <PopAvatar
    path={findPath(type)}
    tipText={type}
    type={size}
  />
)

export default PortfolioAvatar
