<template>
	<div id="app">
		<h1><em>LeanCloud Storage Api</em></h1>
		<br>
		<div class="objBackGround">
			<h2>配置Api <button @click="registerApi(r_input_id,r_input_key)" type="button" id="r_btutton_save">保存</button>
				<button @click="deleteApi()" type="button" id="r_btutton_delete">删除</button>
			</h2>
			<hr>
			<div>
				<p>你的X-LC-Id：
					<input type="text" v-model="r_input_id" name="" id="r_input_id" placeholder="X-LC-Id">
				</p>
				<p>你的X-LC-Key：
					<input type="text" v-model="r_input_key" name="" id="r_input_key" placeholder="X-LC-Key">
				</p>
			</div>
			<hr>
			<div v-if="isRegisterSuccess == 'true'">
				<p class="returnRes">{{r_result}}</p>
			</div>
			<div v-else>
				<p class="returnRes">这里将会显示返回结果</p>
			</div>
		</div>
		<br>
		<div class="objBackGround">
			<h2>创建对象 <button @click="createUser(c_input_appid1,c_input_key1)" type="button"
					id="c_btutton_start">执行</button>
			</h2>
			<hr>
			<div>
				<p>要创建的appid1：
					<input type="text" v-model="c_input_appid1" name="" id="c_input_appid1" placeholder="appid1">
				</p>
				<p>要创建的key1：
					<input type="text" v-model="c_input_key1" name="" id="c_input_key1" placeholder="key1">
				</p>
			</div>
			<hr>
			<div v-if="isCreateSuccess == 'true'">
				<p class="returnRes">返回的objectId：{{c_ObjectId}}</p>
				<p class="returnRes">返回的createdAt：{{c_CreatedAt}}</p>
			</div>
			<div v-else>
				<p class="returnRes">这里将会显示返回结果</p>
			</div>
		</div>
		<br>
		<div class="objBackGround">
			<h2>获取对象 <button @click="getUser(g_input_objectId)" type="button" id="g_btutton_start">执行</button></h2>
			<hr>
			<div>
				<p>要获取的objectId：
					<input type="text" v-model="g_input_objectId" name="" id="g_input_objectId" placeholder="objectId">
				</p>
			</div>
			<hr>
			<div v-if="isGetSuccess == 'true'">
				<p class="returnRes">返回的appid1：{{g_Appid1}}</p>
				<p class="returnRes">返回的key1：{{g_Key1}}</p>
				<p class="returnRes">返回的createdAt：{{g_CreatedAt}}</p>
				<p class="returnRes">返回的updatedAt：{{g_UpdatedAt}}</p>
				<p class="returnRes">返回的objectId：{{g_ObjectId}}</p>
			</div>
			<div v-else-if="isGetSuccess == 'false'">
				<p class="returnRes">获取失败，请检查输入！</p>
			</div>
			<div v-else>
				<p class="returnRes">这里将会显示返回结果</p>
			</div>
		</div>
		<br>
		<div class="objBackGround">
			<h2>更新对象 <button @click="updateUser(u_input_appid1,u_input_key1,u_input_objectId)" type="button"
					id="u_btutton_start">执行</button></h2>
			<hr>
			<div>
				<p>要更新的objectId：
					<input type="text" v-model="u_input_objectId" name="" id="u_input_objectId" placeholder="objectId">
				</p>
				<p>要更新的appid1：
					<input type="text" v-model="u_input_appid1" name="" id="u_input_appid1" placeholder="appid1">
				</p>
				<p>要更新的key1：
					<input type="text" v-model="u_input_key1" name="" id="u_input_key1" placeholder="key1">
				</p>
			</div>
			<hr>
			<div v-if="isUpdateSuccess == 'true'">
				<p class="returnRes">返回的创建时间：{{u_UpdatedAt}}</p>
			</div>
			<div v-else-if="isUpdateSuccess == 'false'">
				<p class="returnRes">获取失败，请检查输入！</p>
			</div>
			<div v-else>
				<p class="returnRes">这里将会显示返回结果</p>
			</div>
		</div>
		<br>
		<div class="objBackGround">
			<h2>删除对象 <button @click="deleteUser(d_input_objectId)" type="button" id="d_btutton_start">执行</button></h2>
			<hr>
			<div>
				<p>要更新的objectId：
					<input type="text" v-model="d_input_objectId" name="" id="d_input_objectId" placeholder="objectId">
				</p>
			</div>
			<hr>
			<div v-if="isDeleteSuccess == 'true'">
				<p class="returnRes">返回结果：{{d_result}}</p>
			</div>
			<div v-else-if="isDeleteSuccess == 'false'">
				<p class="returnRes">获取失败，请检查输入！</p>
			</div>
			<div v-else>
				<p class="returnRes">这里将会显示返回结果</p>
			</div>
		</div>
		<br>

	</div>
</template>

<script>
	import axios from "axios"
	var vm = {
		name: 'App',
		data() {
			return {
				r_input_id: "",
				r_input_key: "",
				isRegisterSuccess: "none",
				r_result: "",

				c_input_appid1: "",
				c_input_key1: "",
				c_ObjectId: "",
				c_CreatedAt: "",
				isCreateSuccess: "none",

				g_input_objectId: "",
				g_Appid1: "",
				g_Key1: "",
				g_CreatedAt: "",
				g_UpdatedAt: "",
				g_ObjectId: "",
				isGetSuccess: "none",

				u_input_appid1: "",
				u_input_key1: "",
				u_input_objectId: "",
				u_UpdatedAt: "",
				isUpdateSuccess: "none",

				d_input_objectId: "",
				d_result: "",
				isDeleteSuccess: "none",
			}
		},
		methods: {
			registerApi(x_lc_id, x_lc_key) {
				localStorage.setItem("x-lc-id", x_lc_id);
				localStorage.setItem("x-lc-key", x_lc_key);
				this.r_result = "保存成功！"
				this.isRegisterSuccess = "true";
			},
			deleteApi() {
				localStorage.removeItem("x-lc-id");
				localStorage.removeItem("x-lc-key");
				this.r_input_id = "";
				this.r_input_key = "";
				this.r_result = "删除成功！"
				this.isRegisterSuccess = "true";
			},
			// C 创建用户
			createUser(appid1, key1) {
				var data = JSON.stringify({
					"appid1": appid1,
					"key1": key1,
					"exit": false,
					"times": 0
				});
				var config = {
					method: 'post',
					url: '/1.1/classes/MyUser',
					headers: {
						'X-LC-Id': localStorage.getItem("x-lc-id"),
						'X-LC-Key': localStorage.getItem("x-lc-key"),
						'Content-Type': 'application/json'
					},
					data: data
				};
				axios(config)
					.then(function(response) {
						var result = response.data;
						// console.log(JSON.stringify(result));
						console.log("objectId:", result.objectId);
						console.log("createdAt:", result.createdAt);
						$vm.$data.isCreateSuccess = "true";
						$vm.$data.c_ObjectId = result.objectId;
						$vm.$data.c_CreatedAt = result.createdAt;
					})
					.catch(function(error) {
						console.error(error);
						$vm.$data.isCreateSuccess = "false";
					});
			},

			// R 获取用户
			getUser(objectId) {
				var config = {
					method: 'get',
					url: '/1.1/classes/MyUser/' + objectId,
					// 保留
					headers: {
						'X-LC-Id': localStorage.getItem("x-lc-id"),
						'X-LC-Key': localStorage.getItem("x-lc-key"),
					}
				};

				axios(config)
					.then(function(response) {
						var result = response
							.data; //返回的主体是一个 JSON 对象包含所有用户提供的 field 加上 createdAt、updatedAt 和 objectId 字段：
						if (JSON.stringify(result) != "{}") {
							console.log(`用户${objectId}的appid为${result.appid1},key为${result.key1}`);
							$vm.$data.isGetSuccess = "true"
							$vm.$data.g_CreatedAt = result.createdAt;
							$vm.$data.g_UpdatedAt = result.updatedAt;
							$vm.$data.g_ObjectId = result.objectId;
							$vm.$data.g_Appid1 = result.appid1;
							$vm.$data.g_Key1 = result.key1;
						} else {
							$vm.$data.isGetSuccess = "false"
						}
					})
					.catch(function(error) {
						console.error(error);
						$vm.$data.isGetSuccess = "false"
					});
			},

			// U 更新用户
			updateUser(appid1, key1, objectId) {
				var data = JSON.stringify({
					"appid1": appid1,
					"key1": key1,
				});

				var config = {
					method: 'put',
					url: '/1.1/classes/MyUser/' + objectId,
					headers: {
						'X-LC-Id': localStorage.getItem("x-lc-id"),
						'X-LC-Key': localStorage.getItem("x-lc-key"),
						'Content-Type': 'application/json'
					},
					data: data
				};

				axios(config)
					.then(function(response) {
						var result = response.data; // 返回的 JSON 对象只会包含一个 updatedAt 字段，表明更新发生的时间
						if (JSON.stringify(result) != "{}") {
							$vm.$data.isUpdateSuccess = "true";
							$vm.$data.u_UpdatedAt = result.updatedAt;
							console.log("返回结果：", $vm.$data.u_UpdatedAt);
						} else {
							$vm.$data.isUpdateSuccess = "false";
						}
					})
					.catch(function(error) {
						console.error(error);
						$vm.$data.isUpdateSuccess = "false";
					});

			},

			// D 删除用户
			deleteUser(objectId) {
				var config = {
					method: 'delete',
					url: '/1.1/classes/MyUser/' + objectId,
					headers: {
						'X-LC-Id': localStorage.getItem("x-lc-id"),
						'X-LC-Key': localStorage.getItem("x-lc-key"),
					}
				};

				axios(config)
					.then(function(response) {
						var result = response.data; // 空
						if (JSON.stringify(result) == "{}") {
							$vm.$data.isDeleteSuccess = "true";
							$vm.$data.d_result = "Delete Success!";
							console.log($vm.$data.d_result);
						} else {
							$vm.$data.isDeleteSuccess = "false";
						}
					})
					.catch(function(error) {
						console.error(error);
						$vm.$data.isDeleteSuccess = "false";
					});

			}
		},
		mounted() {
			this.$data.r_input_id = localStorage.getItem("x-lc-id");
			this.$data.r_input_key = localStorage.getItem("x-lc-key");
		}
	}
	export default vm
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: black;
		margin-top: 3.75rem;
	}

	.objBackGround {
		background-color: #fff7de;
		border-radius: 2.5rem;
		width: 85%;
		margin: 0 auto;
	}

	.returnRes {
		padding-bottom: 0.9375rem;
		color: #ff8a14;
	}

	.objBackGround button {
		background-color: #ed6f67;
		border-color: #ed6f67;
		color: white;
		width: 3.75rem;
		margin-top: 0.9375rem;
		height: 2.1875rem;
		border-radius: 2.5rem;
	}
</style>
