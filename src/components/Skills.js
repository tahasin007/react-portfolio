import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'

const Skills = () => {
  return (
    <div className='skill-section'>
      <Tooltip TransitionComponent={Zoom} title='HTML' arrow>
        <div className='html hexagon skill'>
          <i className='devicon-html5-plain-wordmark'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='CSS' arrow>
        <div className='css hexagon skill'>
          <i className='devicon-css3-plain-wordmark'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Python' arrow>
        <div className='python hexagon skill'>
          <i className='devicon-python-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Bootstrap' arrow>
        <div className='bt hexagon skill'>
          <i className='devicon-bootstrap-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Material-UI' arrow>
        <div className='m-ui hexagon skill'>
          <i className='devicon-materialui-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='VS Code' arrow>
        <div className='vscode hexagon skill'>
          <i className='devicon-vscode-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='React JS' arrow>
        <div className='react hexagon skill'>
          <i className='devicon-react-original-wordmark'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Express JS' arrow>
        <div className='express hexagon skill'>
          <i className='devicon-express-original'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Node JS' arrow>
        <div className='nodejs hexagon skill'>
          <i className='devicon-nodejs-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Redux' arrow>
        <div className='redux hexagon skill'>
          <i className='devicon-redux-original'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Vanilla JavaScript' arrow>
        <div className='js hexagon skill'>
          <i className='devicon-javascript-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Git' arrow>
        <div className='gh hexagon skill'>
          <i className='devicon-git-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='MongoDB' arrow>
        <div className='md hexagon skill'>
          <i className='devicon-mongodb-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='MySQL' arrow>
        <div className='sql hexagon skill'>
          <i className='devicon-mysql-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='jQuery' arrow>
        <div className='jq hexagon skill'>
          <i className='devicon-jquery-plain'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Docker' arrow>
        <div className='docker hexagon skill'>
          <i className='devicon-docker-plain-wordmark'></i>
        </div>
      </Tooltip>

      <Tooltip TransitionComponent={Zoom} title='Kubernetes' arrow>
        <div className='kb hexagon skill'>
          <i className='devicon-kubernetes-plain-wordmark'></i>
        </div>
      </Tooltip>
    </div>
  )
}

export default Skills
