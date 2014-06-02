/*
 * Copyright (c) 2014 airbug Inc. All rights reserved.
 *
 * All software, both binary and source contained in this work is the exclusive property
 * of airbug Inc. Modification, decompilation, disassembly, or any other means of discovering
 * the source code of this software is prohibited. This work is protected under the United
 * States copyright law and other international copyright treaties and conventions.
 */


//-------------------------------------------------------------------------------
// Annotations
//-------------------------------------------------------------------------------

//@Export('routebugserver.RoutebugServerConfig')

//@Require('Class')
//@Require('Config')
//@Require('TypeUtil')


//-------------------------------------------------------------------------------
// Context
//-------------------------------------------------------------------------------

require('bugpack').context("*", function(bugpack) {

    //-------------------------------------------------------------------------------
    // BugPack
    //-------------------------------------------------------------------------------

    var Class       = bugpack.require('Class');
    var Config      = bugpack.require('Config');
    var TypeUtil    = bugpack.require('TypeUtil');


    //-------------------------------------------------------------------------------
    // Declare Class
    //-------------------------------------------------------------------------------

    /**
     * @class
     * @extends {Config}
     */
    var RoutebugServerConfig = Class.extend(Config, {

        _name: "routebugserver.RoutebugServerConfig",


        //-------------------------------------------------------------------------------
        // Getters and Setters
        //-------------------------------------------------------------------------------

        /**
         * @return {string} appVersion
         */
        getAppVersion: function() {
            return this.getProperty("appVersion");
        },

        /**
         * @param {string} appVersion
         */
        setAppVersion: function(appVersion) {
            this.setProperty("appVersion", appVersion);
        },

        /**
         * @return {string}
         */
        getStaticUrl: function() {
            return this.getProperty("staticUrl");
        },

        /**
         * @param {string} staticUrl
         */
        setStaticUrl: function(staticUrl) {
            this.setProperty("staticUrl", staticUrl);
        },

        /**
         * @return {string}
         */
        getStickyStaticUrl: function() {
            return this.getProperty("stickyStaticUrl");
        },

        /**
         * @param {string} stickyStaticUrl
         */
        setStickyStaticUrl: function(stickyStaticUrl) {
            this.setProperty("stickyStaticUrl", stickyStaticUrl);
        }
    });


    //-------------------------------------------------------------------------------
    // Exports
    //-------------------------------------------------------------------------------

    bugpack.export("routebugserver.RoutebugServerConfig", RoutebugServerConfig);
});
