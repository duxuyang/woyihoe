<template>
	<div>
		<p>这是demo2</p>
		<p>{{msg}}</p>
		<div class="main"></div>
	</div>
</template>
<script type="text/javascript">
	  export default{
    data:function(){
      return {
        msg:'Hello UserList 这是demo2'
      }
    }
  }
</script>

<style type="text/css">
	.main{
		width:100%;
		height:500px;
		border:1px solid red;
	}


</style>