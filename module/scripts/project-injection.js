var SfdcConnectorExtension = { handlers: {} };


SfdcConnectorExtension.handlers.dummy = function() {
  
};


ExtensionBar.MenuItems.push(
			{
				"id":"sfdcconnector",
				"label": "SFDC",
				"submenu" : [
					{
						"id": "rdf/edit-rdf-schema",
						label: "Edit RDF Skeleton...",
						click: function() {  }
					},
					{
						"id": "rdf/reset-rdf-schema",
						label: "Reset RDF Skeleton...",
						click: function() {  }
					},
					{},
			        {
			        	"id": "rdf/sfdcconnector",
			            label: "Add reconciliation service",
			            submenu:[
			                     {
			                    	 "id" :"rdf/sfdcconnector/sparql",
			                    	 label: "Based on SPARQL endpoint...",
			                    	 click: function() { }
			                     },
			                     {
			                    	 "id":"rdf/sfdcconnector/dump",
			                    	 label:"Based on RDF file...",
			                    	 click: function() {  }        	 
			                     },
			                     {
			                    	 "id" : "rdf/sfdcconnector/sindice",
			                    	 label: "Based on a Sindice site search...",
			                    	 click: function() {  }        	 
			                     },
			                     {
			                    	 "id" : "rdf/sfdcconnector/stanbol",
			                    	 label: "Based on a Apache Stanbol EntityHub...",
			                    	 click: function() {  }        	 
			                     }
						]
					
			        }
			    ]
			}
);



