switch(language) {
            case "DE":
                window.handlerContent = {
					TopText: "JETZT BEI",
    				BottomText: "RETAILER_PLACEHOLDER IN LOCATION_PLACEHOLDER",
				};
                break;
            case "FR":
                window.handlerContent = {
					TopText: "DISPONIBLE CHEZ VOTRE ",
    				BottomText: "CONCESSIONAIRE RETAILER_PLACEHOLDER À LOCATION_PLACEHOLDER",
				};
                break;
            case "IT":
                 window.handlerContent = {
					TopText: "ORA PRESSO ",
    				BottomText: "RETAILER_PLACEHOLDER A LOCATION_PLACEHOLDER",
				};
                break;
            default:
                alert("No Language defined.");
}