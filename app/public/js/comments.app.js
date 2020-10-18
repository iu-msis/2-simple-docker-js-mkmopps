var app = new Vue({
  el: '#commentTableBody',
  data: {
    comments: [{
      id:'',
      commentText:''
    }],
    newComment: {
      id:'',
      commentText:''
    }
  },
  methods: {
    fetchUser(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.comments=json;
        console.log(this.comments);
      });
    },
    createComment(){
      this.newComment.id = 
      fetch('api/comments/create.php', {
        method: 'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=uf-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log("Returned from post", json)
        this.comments.push(json[0]);
        this.newComment = this.newCommentData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.newComment);
      },
      newCommentData(){
        return {
          id: "",
          commentText: ""
        }
      }
  },
    created (){
      this.fetchUser();
    }
  });
