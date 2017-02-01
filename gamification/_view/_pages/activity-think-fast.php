<!-- CSS -->
<link href="../_view/_css/activity-think-fast.css" rel="stylesheet">
<!-- JS -->
<script type="text/javascript" src="../_view/_js/activity-think-fast.js"></script>

<div class="page-margin"></div>

<div class="container">

	<div class="row">
		<div id="activitie-title" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			Pense Rápido
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
		<div id="tab-question" class="tab col-md-12 col-lg-12 col-sm-12 col-xs-12">
			1 + 1 = ?
		</div>
	</div>

	<div class="row">
		<div class="progress tab">
			<div id="clockTime" class="progress-bar progress-bar-danger"  style="width: 0%">
				0
			</div>
		</div>
	</div>

	<div class="row">
		<div id="btn-answer-1" class="tab btn-mente btn-answer col-md-6 col-lg-6 col-sm-6 col-xs-6">
			1
		</div>
		<div id="btn-answer-2" class="tab btn-mente btn-answer col-md-6 col-lg-6 col-sm-6 col-xs-6">
			2
		</div>
		<div id="btn-answer-3" class="tab btn-mente btn-answer col-md-6 col-lg-6 col-sm-6 col-xs-6">
			3
		</div>
		<div id="btn-answer-4" class="tab btn-mente btn-answer col-md-6 col-lg-6 col-sm-6 col-xs-6">
			4
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
