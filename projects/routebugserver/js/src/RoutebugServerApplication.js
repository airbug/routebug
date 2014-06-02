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

//@Export('routebugserver.RoutebugServerApplication')
//@Autoload

//@Require('Class')
//@Require('bugapp.Application')
//@Require('bugentity.EntityManagerTagProcessor')
//@Require('bugentity.EntityManagerTagScan')
//@Require('bugmeta.BugMeta')


//-------------------------------------------------------------------------------
// Context
//-------------------------------------------------------------------------------

require('bugpack').context("*", function(bugpack) {

    //-------------------------------------------------------------------------------
    // BugPack
    //-------------------------------------------------------------------------------

    var Class                               = bugpack.require('Class');
    var Application                         = bugpack.require('bugapp.Application');
    var EntityManagerTagProcessor    = bugpack.require('bugentity.EntityManagerTagProcessor');
    var EntityManagerTagScan         = bugpack.require('bugentity.EntityManagerTagScan');
    var BugMeta                             = bugpack.require('bugmeta.BugMeta');


    //-------------------------------------------------------------------------------
    // Declare Class
    //-------------------------------------------------------------------------------

    /**
     * @class
     * @extends {Application}
     */
    var RoutebugServerApplication = Class.extend(Application, {

        _name: "routebugserver.RoutebugServerApplication",


        //-------------------------------------------------------------------------------
        // Constructor
        //-------------------------------------------------------------------------------

        /**
         * @constructs
         */
        _constructor: function() {

            this._super();


            //-------------------------------------------------------------------------------
            // Private Properties
            //-------------------------------------------------------------------------------

            /**
             * @private
             * @type {EntityManagerTagScan}
             */
            this.entityManagerTagScan    = new EntityManagerTagScan(BugMeta.context(), new EntityManagerTagProcessor(this.getIocContext()));
        },


        //-------------------------------------------------------------------------------
        // Application Methods
        //-------------------------------------------------------------------------------

        /**
         * @protected
         */
        preProcessApplication: function() {
            this.getConfigurationTagScan().scanBugpacks([
                "routebugserver.RoutebugServerConfiguration"
            ]);
            this.entityManagerTagScan.scanAll();
            this.getModuleTagScan().scanAll({
                excludes: [
                    "bugmigrate.MigrationInitializer",
                    "bugmigrate.MigrationManager"
                ]
            });
        }
    });


    //-------------------------------------------------------------------------------
    // Exports
    //-------------------------------------------------------------------------------

    bugpack.export('routebugserver.RoutebugServerApplication', RoutebugServerApplication);
});
