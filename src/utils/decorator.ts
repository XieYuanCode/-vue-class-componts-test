'use strict'
import Vue, { PropOptions, WatchOptions } from 'vue'
import Component, { createDecorator } from 'vue-class-component'
import 'reflect-metadata'

export type Constructor = {
  new(...args: any[]): any
}

/**
 * decorator of a data
 * @param key key
 * @return PropertyDecorator
 */
export function Data(key?: object): PropertyDecorator {
  return createDecorator((componentOptions, K) => {
    console.log("key: ", key)
    console.log("componentOptions: ", componentOptions)
    console.log("K: ", K)
    if (key) {
      componentOptions.data = function () {
        return key
      }
    }
  })
}

export { Component, Vue }
