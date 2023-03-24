// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './counters.module.css'

function MyButton() {
  return (
     <div className="{styles.header}">
    <div className="{styles.container}">
      <div className="{styles.hero-content}">
        <div className="{styles.hero-block}">
          <div className="{styles.content-block-hero}">
            <h1 className="{styles.heading-2}">
              <strong className="{styles.bold-text-9}">我們的</strong>
              <span>
                <strong className="{styles.bold-text}">使命</strong>
              </span>
              <strong className="{styles.bold-text-9}">是將</strong>
              <span>
                <strong className="{styles.bold-text-3}">雙</strong>
              </span>
              <strong className="{styles.bold-text-3}">龍</strong>
              <span>
                <strong className="{styles.bold-text-3}">體</strong>
                <strong className="{styles.bold-text-3}">育</strong>
              </span>
              <strong className="{styles.bold-text-10}">組成</strong>
              <span>
                <strong className="{styles.bold-text-6}">最棒</strong>
             </span>
              <strong className="{styles.bold-text-10}">體育組織</strong>
              <span>
              </span>
              <span className="{styles.cursor}">
                <strong className="{styles.cursor}" data-owner="main"></strong>
              </span>
            </h1>
            <div className="{styles.button-wrap-hero}">
            </div>
          </div>
        </div>
        <div className="{styles.hero-image-wrap}">
          <img
            alt=""
            className="{styles.hero-image}"
            src="https://74-rho.vercel.app/images/undraw_fitness_stats_sht6.svg"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default function MyApp() {
}
