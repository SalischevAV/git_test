		var firstArgument;
		var secondArgument;
		var flagOperation;
		var operationResult;
		var tempArgument;
		var resultInput = document.getElementById("result");
		
		
		
		function isertValue(buttonValue){
			resultInput.value += buttonValue;
		}
		
		function setButtonValue(){
			return event.currentTarget.value;
		}
		
		function resetInput(){
			resultInput.value ="";
		}
		function setOperation(){
				firstArgument = resultInput.value;
				/*if(firstArgument[0] == "."){
						firstArgument.unshift('0');*/
				}
				console.log(firstArgument);
				flagOperation = event.currentTarget.value;
				console.log(event.currentTarget.value)
				resultInput.value ="";		
		}
		
		function setSign(){
			tempArgument = resultInput.value;
			tempArgument *= -1;
			resultInput.value = tempArgument;
		}
		
		function decimalPoint(){
			tempArgument = resultInput.value;
			var flag = true;
			for (var i = 0; i < tempArgument.length; i++){
				if(tempArgument[i] == '.'){
					flag = false;
					}
			}
			if(flag){
				resultInput.value += event.currentTarget.value;
			}
		}
		
		
		function executeResult(){
			secondArgument = resultInput.value;
			/*if(secondArgument[0] == '.'){
						secondArgument.unshift('0');
				}*/
			console.log(secondArgument);
			switch(flagOperation){
			case ('+') :
				operationResult = +firstArgument + +secondArgument
				break;
				
			case "-" :
				operationResult = +firstArgument - +secondArgument;
				break;
					
			case "*" :
				operationResult = +firstArgument * +secondArgument;
				break;
				
			case "/" :
			if (secondArgument != 0){
				operationResult = +firstArgument * +secondArgument;
				}
				else{
					operationResult = "Не допускается деление на нуль";
					}
				break;	
				}
		 resultInput.value = operationResult;
		 firstArgument = "";
		 secondArgument = "";
		 
		}