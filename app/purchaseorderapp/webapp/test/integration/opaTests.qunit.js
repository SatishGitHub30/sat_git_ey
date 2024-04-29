sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ey/satish/purchaseorderapp/test/integration/FirstJourney',
		'ey/satish/purchaseorderapp/test/integration/pages/POsList',
		'ey/satish/purchaseorderapp/test/integration/pages/POsObjectPage',
		'ey/satish/purchaseorderapp/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ey/satish/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);