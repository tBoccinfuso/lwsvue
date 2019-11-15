<template>
<transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <button class="modal-default-button" @click="$emit('close')">Close</button>
            <h3 name="header">
              {{ ContactFormHeader }}
            </h3>
          </div>

          <div class="modal-body">
            <slot name="body">
               <form id="contact" action="" method="post">
                <fieldset>
                  <input placeholder="Your name" type="text" tabindex="1" required autofocus>
                </fieldset>
                <fieldset>
                  <input placeholder="Your Email Address" type="email" tabindex="2" required>
                </fieldset>
                <fieldset>
                  <input placeholder="Your Phone Number" type="tel" tabindex="3" required>
                </fieldset>
                <fieldset>
                  <input placeholder="Your Web Site starts with http://" type="url" tabindex="4" required>
                </fieldset>
                <fieldset>
                  <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
                </fieldset>
              </form>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <!-- Here our is where our slots will be added in (if we pass any) -->
              <slot name="client"></slot>
              <button class="modal-default-button" @click="$emit('close')">
                Submit
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'cointactForm',
  props: [
    'ContactFormHeader'
  ]
}
</script>

<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-font-smoothing:antialiased;
    -moz-font-smoothing:antialiased;
    -o-font-smoothing:antialiased;
    font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }

  body {
    font-family:"Open Sans", Helvetica, Arial, sans-serif;
    font-weight:300;
    font-size: 12px;
    line-height:30px;
    color:#777;
    background:#0CF;
  }

  .container {
    max-width:400px;
    width:100%;
    margin:0 auto;
    position:relative;
  }

  #contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea, #contact button[type="submit"] { font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif; }

  #contact {
    background:#F9F9F9;
    padding:25px;
    margin:50px 0;
  }

  #contact h3 {
    color: #F96;
    display: block;
    font-size: 30px;
    font-weight: 400;
  }

  #contact h4 {
    margin:5px 0 15px;
    display:block;
    font-size:13px;
  }

  fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  #contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea {
    width:100%;
    border:1px solid #CCC;
    background:#FFF;
    margin:0 0 5px;
    padding:10px;
  }

  #contact input[type="text"]:hover, #contact input[type="email"]:hover, #contact input[type="tel"]:hover, #contact input[type="url"]:hover, #contact textarea:hover {
    -webkit-transition:border-color 0.3s ease-in-out;
    -moz-transition:border-color 0.3s ease-in-out;
    transition:border-color 0.3s ease-in-out;
    border:1px solid #AAA;
  }

  #contact textarea {
    height:100px;
    max-width:100%;
    resize:none;
  }

  #contact button[type="submit"] {
    cursor:pointer;
    width:100%;
    border:none;
    background:#0CF;
    color:#FFF;
    margin:0 0 5px;
    padding:10px;
    font-size:15px;
  }

  #contact button[type="submit"]:hover {
    background:#09C;
    -webkit-transition:background 0.3s ease-in-out;
    -moz-transition:background 0.3s ease-in-out;
    transition:background-color 0.3s ease-in-out;
  }

  #contact button[type="submit"]:active { box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5); }

  #contact input:focus, #contact textarea:focus {
    outline:0;
    border:1px solid #999;
  }
  ::-webkit-input-placeholder {
  color:#888;
  }
  :-moz-placeholder {
  color:#888;
  }
  ::-moz-placeholder {
  color:#888;
  }
  :-ms-input-placeholder {
  color:#888;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 500px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
