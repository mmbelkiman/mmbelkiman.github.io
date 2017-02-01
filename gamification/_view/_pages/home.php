<!-- CSS -->
<link href="_view/_css/home.css" rel="stylesheet">
<!-- JS -->
<script type="text/javascript" src="_view/_js/home.js"></script>

<div class="page-margin"></div>

<div id="page-content" class="container">

	<div class="row">
		<!-- PROFILE -->
		<div id="tab-profile" class="tab col-md-4 col-lg-4 col-sm-12 col-xs-12">

			<div class="row">
				<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
					<img id="profile-photo" class="img-responsive" src="_images/_content/img-profile.jpg">
				</div>

				<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
					<div id="profile-name" class="row">
						Marcelo Belkiman
					</div>
					<div id="profile-points" class="row">
						<i style="color: orange;" class="fa  fa-star"></i>
						200 pts
					</div>
					<div id="profile-achievements"  class="row">
						<i style="color: rgb(253, 227, 167);"  class="fa fa-trophy"></i>
						3 conquistas
					</div>
				</div>
			</div>
		</div>
		<!-- END PROFILE -->

		<div class="col-md-1 col-lg-1 hidden-sm hidden-xs">

		</div>

		<!-- ACHIEVEMENTS -->
		<div class="tab col-md-7 col-lg-7 col-sm-12 col-xs-12">
			<div class="row">
				<div id="achievements-title" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
					CONQUISTAS
				</div>
			</div>

			<div id="achievements-row" class="row" >
				<div id="achievement-" class="text-center col-md-2 col-lg-2 col-sm-3 col-xs-4" style="display:none;">
					<i class="achievement-icon"></i>
					</br><span class="achievement-name">Conquista 1</span>
				</div>
			</div>
		</div>
		<!-- END ACHIEVEMENTS -->

	</div>

	<div class="row">
		<!-- RANKING -->
		<div id="tab-ranking" class="tab col-md-4 col-lg-4 col-sm-12 col-xs-12">
			<div class="row">
				<div id="ranking-title" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
					RANKING
				</div>
			</div>

			<div id="ranking-" class="row" style="display:none;">
				<div class="ranking-position col-md-1 col-lg-1 col-sm-1 col-xs-1">
					1
				</div>

				<div class="ranking-name col-md-6 col-lg-6 col-sm-6 col-xs-6">
					clone
				</div>
				<div class="col-md-4 col-lg-4 col-sm-4 col-xs-4">
					<i style="color: orange;" class="fa  fa-star"></i>400 pts
				</div>

				<div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"></div>
			</div>
		</div>
		<!-- END RANKING -->
		<div class="col-md-1 col-lg-1 hidden-sm hidden-xs"></div>

		<!-- ACTIVITIES -->
		<div id="tab-activities" class="tab col-md-7 col-lg-7 col-sm-12 col-xs-12">
			<div class="row">
				<div id="activities-title" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
					ATIVIDADES
				</div>
			</div>

			<div id="activities-" class="row" style="display: none;">
				<div class="tab-activities col-md-12 col-lg-12 col-sm-12 col-xs-12">
					<div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
						<i style="color: black;" class="activities-icon"></i>
						<span class="activities-name">clone</span>
					</div>
					<div class="col-md-2 col-lg-2 col-sm-2 col-xs-5">
						02:35<span class="icon-signal-3"></span>
					</div>
					<div class="activetie-points col-md-4 col-lg-4 col-sm-4 col-xs-7">
						3000pts <i style="color: orange;" class="fa fa-bed "></i>
					</div>
				</div>

				<div class="tab-sub-activities-group">
					<div id="sub-activitie-1-" class="tab-sub-activities col-md-12 col-lg-12 col-sm-12 col-xs-12">
						<i style="color: black; font-size: 0.7em;" class="fa  fa-circle"></i>
						Nível 1
					</div>
					<div id="sub-activitie-2-" class="tab-sub-activities col-md-12 col-lg-12 col-sm-12 col-xs-12">
						<i style="color: black; font-size: 0.7em;" class="fa  fa-circle"></i>
						Nível 2
					</div>
					<div id="sub-activitie-3-" class="tab-sub-activities col-md-12 col-lg-12 col-sm-12 col-xs-12">
						<i style="color: black; font-size: 0.7em;" class="fa  fa-circle"></i>
						Nível 3
					</div>
					<div id="sub-activitie-4-" class="tab-sub-activities col-md-12 col-lg-12 col-sm-12 col-xs-12">
						<i style="color: black; font-size: 0.7em;" class="fa  fa-circle"></i>
						Nível 4
					</div>
					<div id="sub-activitie-5-" class="tab-sub-activities col-md-12 col-lg-12 col-sm-12 col-xs-12">
						<i style="color: black; font-size: 0.7em;" class="fa  fa-circle"></i>
						Nível 5
					</div>
				</div>
			</div>
		</div>
		<!-- END ACTIVITIES -->

	</div>

	<div class="row">
		<!-- EXIT -->
		<div class="tab col-md-12 col-lg-12 col-sm-12 col-xs-12">
			<div class="row">
				<div class="btn-mente btn-alert"  id="btn-exit" class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
					SAIR
				</div>
			</div>
		</div>
		<!-- END EXIT -->
	</div>

	<!-- Modals control ======================================================= -->

	<div class="modal fade modal-achievement">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" id="modalPreStartClose" data-dismiss="modal" aria-hidden="true">
						&times;
					</button>
					<h3>Conquista: <span class="modal-achievement-title"></span></h3>
				</div>

				<div class="modal-body">
					<h4>Descrição:</h4>
					<p class="modal-achievement-description"></p>

					<p class="modal-achievement-nohave">
						Você não possui está conquista
					</p>
					<p class="modal-achievement-have">
						Você já possui está conquista
					</p>
				</div>

				<div class="modal-footer">
					<div id="modal-achievement-continue" class="btn-mente btn-ok">
						Continuar navegação
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade modal-activities">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" id="modalPreStartClose" data-dismiss="modal" aria-hidden="true">
						&times;
					</button>
					<h3>Atividade: <span class="modal-activities-title"></span></h3>
					<h4>Nível: <span class="modal-activities-level"></span></h4>
				</div>

				<div class="modal-body">
					<h4>Descrição:</h4>
					<p class="modal-activities-description"></p>
					
					<p class="modal-activities-noPoints">Consiga no minimo <span>000pts</span> nesta atividade para liberar este nível</p>
					<p class="modal-activities-noEnergy">Você não possui energia suficiente para realizar está atividade</p>
				</div>

				<div class="modal-footer">
					<div id="modal-activities-start" class="btn-mente btn-ok">
						Iniciar Atividade
					</div>

					<div id="modal-activities-cancel" class="btn-mente btn-alert">
						Cancelar
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END: Modals control ======================================================= -->

</div>