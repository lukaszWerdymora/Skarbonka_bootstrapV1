function supportOnClick (pageName)
{
	if (pageName===buttonToMainMenu){location.href="mainAplication.html";}
	
	
}
function resetFrom()
{
	alert();
	expanse.html('');
}

buttonToMainMenu.addEventListener( "click", function() { supportOnClick (buttonToMainMenu); } );
//resetButton.addEventListener( "click", function() { resetFrom(); } );
function drawPieChartExpanses()
{
	
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Tag', 'quota'],
          ['Rozrywka',     		175],
          ['Zakupy spożywcze',	125.25],
		  ['Rachunki',			90],
		  ['Paliwo',			70],
		  ['Korepetycje',		50],
		  ['Remont',			12]
		  
        ]);

        var options = {
          title: 'Moje wydatki',
		  colors:['#339933','#39ac39','#53c653','#79d279','#9fdf9f','#c6ecc6'],
		  backgroundColor: '#333',
		  'titleTextStyle':{color:'white', fontSize: 25},
		  'legendTextStyle':{color: 'white', fontSize:18},
		  chartArea: {width: '98%', height: '80%'},
		  
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
	  
}
function drawPieChartIncomes()
{
	
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Tag', 'quota'],
          ['Stały dochód',     	2000],
          ['Allegro',			134.56],
		  ['Wynajem',			6000],
		  ['Lewizna',			10000],
		  
		  
        ]);

        var options = {
          title: 'Moje wpływy',
		  colors:['#339933','#39ac39','#53c653','#79d279','#9fdf9f','#c6ecc6'],
		  backgroundColor: '#333',
		  'titleTextStyle':{color:'white', fontSize: 25},
		  'legendTextStyle':{color: 'white', fontSize:18},
		  
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
}
