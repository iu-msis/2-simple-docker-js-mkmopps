var app = new Vue({
  el: '#commentTableBody',
  data: {
    comments: [{
      id:'',
      commentText:''
    }]
  },
  methods: {
    fetchUser(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.comments=json;
        console.log(this.comments);
      });
    }
  },
    created (){
      this.fetchUser();
    }
  });
