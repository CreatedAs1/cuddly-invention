let UIcontainer = {
  button: function(id, whenActive = function() {}) {
    this.id = id;
    this.whenActive = whenActive;
    this.element = document.getElementById("id");
    this.listener = function() {
      this.element.addEventListener("click", this.whenActive);
    };
  }
};
