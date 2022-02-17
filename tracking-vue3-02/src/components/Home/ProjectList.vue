<template>
    <div class="block-02">
        <h2 class="bl-header p-3">Recent Projectssss</h2>
        <div class="p-3">

				<div class="bl-body">
					<div class="list-group">
						<a routerLink="/project-detail/1" class="list-group-item list-group-item-action d-flex border-0 border-bottom" aria-current="true">

							<div class="flex-grow-0 p-3">
								<button color="primary">
									Folder
								</button>
							</div>
							<div class="flex-grow-1 ps-1">
								<div class="row m-0">
									<div class="col-9">
										<div class="fw-bold">Learning Photoshop - Essential</div>
										<small >
											This space will be placed some <br>
											detail about the project.
										</small>
										<div class="pt-3 pb-3">
											<button type="button" class="btn rounded rounded-pill btn-sm btn-secondary position-relative">
												Tasks
												<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
										    99+
										    <span class="visually-hidden">unread messages</span>
										</span>
											</button>
											<img src="" class="img-thumbnail rounded-circle" alt=".">
										</div>
									</div>
									<div class="col-3">
										<small>40% completed</small>
										mat-progress-bar
									</div>
								</div>
							</div>
						</a>
						<a href="#" class="list-group-item list-group-item-action">A second link item</a>
						<a href="#" class="list-group-item list-group-item-action">A third link item</a>
						<a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
						<a class="list-group-item list-group-item-action disabled">A disabled link item</a>
					</div>
				</div>
				
        </div>
        <footer class="bl-footer"></footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: []
            }
        },        
    }
</script>