<!-- CSS -->
<link href="../_view/_css/activity-xyz.css" rel="stylesheet">
<!-- JS -->
<script type="text/javascript" src="../_view/_js/activity-xyz.js"></script>

<div class="page-margin"></div>

<div class="container">

	<div class="row">
		<div id="activitie-title" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			XYZ
		</div>
		<div id="activitie-level" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			Nível <span id="activitie-level-value">1</span>
		</div>
		<span class="divider"></span>
	</div>

	<div class="row">
		<div id="activitie-points" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			<span id="activitie-points-value">0</span> Pontos
		</div>
	</div>

	<div class="row">
		<div class="progress tab">
			<div id="clockTime" class="progress-bar progress-bar-danger"  style="width: 0%">
				0
			</div>
		</div>
	</div>
	
	<div class="row" style="padding:0.5em;">
	</div>

	<div class="row">
		<div id="tab-question" class="row tab col-md-12 col-lg-12 col-sm-12 col-xs-12">
			<div class="question-row col-md-3 col-lg-3 col-sm-3 col-xs-3">X</div>
			<div class="question-row col-md-3 col-lg-3 col-sm-3 col-xs-3">Y</div>
			<div class="question-row col-md-3 col-lg-3 col-sm-3 col-xs-3">Z</div>
			<div class="question-row col-md-3 col-lg-3 col-sm-3 col-xs-3">X²</div>
			
			<div id="response-row-x" class="question-response-row correct index col-md-3 col-lg-3 col-sm-3 col-xs-3"></div>
			<div id="response-row-y" class="question-response-row correct index col-md-3 col-lg-3 col-sm-3 col-xs-3"></div>
			<div id="response-row-z" class="question-response-row correct index col-md-3 col-lg-3 col-sm-3 col-xs-3"></div>
			<div id="response-row-x2" class="question-response-row null col-md-3 col-lg-3 col-sm-3 col-xs-3" contenteditable="true"></div>
		</div>
		
		<div id="tab-question" class="row tab col-md-12 col-lg-12 col-sm-12 col-xs-12">
			<div class="question-row col-md-3 col-lg-3 col-sm-3 col-xs-3">√y</div>
			<div class="question-row col-md-3 col-lg-3 col-sm-3 col-xs-3">X+Y</div>
			<div class="question-row col-md-3 col-lg-3 col-sm-3 col-xs-3">Z-Y</div>
			<div class="question-row col-md-3 col-lg-3 col-sm-3 col-xs-3">X+Y-Z</div>
			
			<div id="response-row-vy" class="question-response-row null col-md-3 col-lg-3 col-sm-3 col-xs-3" contenteditable="true"></div>
			<div id="response-row-xpy" class="question-response-row null col-md-3 col-lg-3 col-sm-3 col-xs-3" contenteditable="true"></div>
			<div id="response-row-zmy" class="question-response-row null col-md-3 col-lg-3 col-sm-3 col-xs-3" contenteditable="true"></div>
			<div id="response-row-xpymz" class="question-response-row null col-md-3 col-lg-3 col-sm-3 col-xs-3" contenteditable="true"></div>
		</div>
	
	</div>

	<!-- Modals control ======================================================= -->
	<div class="modal fade modal-end-activity" data-keyboard="false" data-backdrop="static">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h3>Atividade finalizada</h3>
				</div>

				<div class="modal-body">
					<h4 id="modal-end-activity-cause">Você errou a resposta.</h4>
					<h5>Sua pontuação foi de <span id="modal-end-activity-points">_</span> pontos</h5>
				</div>

				<div class="modal-footer">
					<div id="modal-end-activity-continue" class="btn-mente btn-ok">
						Sair da atividade
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END: Modals control ======================================================= -->

</div>
