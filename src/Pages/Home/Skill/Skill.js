import React from 'react';
import './Skill.css';
import html from '../../../Icon/1html.png'
import css from '../../../Icon/2css.png'
import boots from '../../../Icon/3bootstrap.png'
import mui from '../../../Icon/4materialui.png'
import js from '../../../Icon/5javascript.png'
import react from '../../../Icon/6react.png'
import node from '../../../Icon/7nodejs.png'
import express from '../../../Icon/8express.js.png'
import mongo from '../../../Icon/9mongodb.png'
import hero from '../../../Icon/10heroku.png'
import netlify from '../../../Icon/11netlify.png'
import figma from '../../../Icon/12figma.png'


const Skill = ({devskill}) => {
     
     return (
          <div className='row skill-box text-center'>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={html} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={css} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={boots} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={mui} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={js} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={react} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={node} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={express} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={mongo} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={hero} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={netlify} alt="" />
          </div>
          <div className="col-md-3 col-4 icon-box">
          <img className='my-5' width="30%" src={figma} alt="" />
          </div>
          </div>
         
     );
};

export default Skill;