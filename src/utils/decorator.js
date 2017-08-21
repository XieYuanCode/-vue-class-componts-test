'use strict';
import Vue from 'vue';
import Component, { createDecorator } from 'vue-class-component';
import 'reflect-metadata';
/**
 * decorator of a data
 * @param key key
 * @return PropertyDecorator
 */
export function Data(key) {
    return createDecorator(function (componentOptions, K) {
        console.log("key: ", key);
        console.log("componentOptions: ", componentOptions);
        console.log("K: ", K);
        componentOptions.data = function () {
            return key;
        };
    });
}
export { Component, Vue };
