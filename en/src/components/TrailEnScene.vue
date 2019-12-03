<template>
  <div :class="['body', size]">
    <div id="applyFormDialog" class="dialog section">
      <div class="container">
        <h2 class="section-title">ENQUIRY</h2>
        <p class="tips">
          Thank you for your attention.
          <br />
          Please fill out the enquiry form, Hytera authorized
          representative will contact you within 2 days!
        </p>
        <div class="section-content">
          <form method="POST" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" class="form"
            id="applyForm">
            <input type=hidden name="oid" value="00D7F000004d3MC" hidden />
            <!-- TODO: Should update the Redirect URL -->
            <input type=hidden name="retURL" value="https://www.hytera.com/html/allstar/en/trial.html#successed" hidden />
            <!-- WARNING: Correct the form id value -->
            <input
              name="00N7F00000LflgN"
              value="7017F000000V0kbQAC"
              type="hidden" maxlength="20"
              size="20"
              hidden />
            <div class="field">
              <label for="a_first_name" class="label">First Name:</label>
              <input id="a_first_name" name="first_name" type="text" class="input" />
            </div>
            <div class="field">
              <label for="a_last_name" class="label">Last Name:</label>
              <input id="a_last_name" name="last_name" type="text" class="input" />
            </div>
            <div class="field">
              <label for="a_email" class="label">Email:</label>
              <input id="a_email" name="email" type="text" class="input" />
            </div>
            <div class="field">
              <label for="a_company" class="label">Company Name:</label>
              <input id="a_company" name="company" type="text" class="input" />
            </div>
            <div class="field">
              <label for="a_country" class="label">Country:</label>
              <select id="a_country" name="00N7F00000M8C21" title="country">
                <!--  NOTE: 这个地方，对应英文官网的 Country -->
                <option value="">--None--</option>
                <option value="China">China</option>
                <option value="United States of America">United States of America</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Spain">Spain</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Ascension">Ascension</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda Is.">Bermuda Is.</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="British Virgin Islands">British Virgin Islands</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina-faso">Burkina-faso</option>
                <option value="Burma">Burma</option>
                <option value="Burundi">Burundi</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Cayman Is.">Cayman Is.</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Cook Is.">Cook Is.</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Democratic Republic of the Congo">
                  Democratic Republic of the Congo
                </option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica Rep.">Dominica Rep.</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="EI Salvador">EI Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Ivory Coast">Ivory Coast</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kampuchea (Cambodia )">Kampuchea (Cambodia )</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Korea">Korea</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Mariana Is">Mariana Is</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mexico">Mexico</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat Is">Montserrat Is</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Korea">North Korea</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Republic of Moldova">Republic of Moldova</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Saint Helena, Ascension and Tristan da Cunha">
                  Saint Helena, Ascension and Tristan da Cunha
                </option>
                <option value="Saint Lueia">Saint Lueia</option>
                <option value="Saint Vincent">Saint Vincent</option>
                <option value="Samoa Eastern">Samoa Eastern</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Is">Solomon Is</option>
                <option value="Somali">Somali</option>
                <option value="South Africa">South Africa</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="the Kingdom of Bhutan">the Kingdom of Bhutan</option>
                <option value="The Republic of the Congo">The Republic of the Congo</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zaire">Zaire</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div class="field">
              <label for="a_description" class="label">Demand Description:</label>
              <textarea id="a_description" name="description" type="text" class="input"></textarea>
            </div>
            <button type="submit" class="submit-btn">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trail-scene',
  data() {
    return {
      zoom: 1,
      size: 'S',
    };
  },
  mounted() {
    window.onresize = this.updateSize;
    this.updateSize();
    /* eslint-disable */
    var baseUrl = 'https://demo.oramage.com/project/unknow/cgi/api/api'
    var emailRegEx = /[^@]+@[^\.]+\..+/g

    function ajax(url, param, type) {
      return $.ajax({
        url: url,
        data: param || {},
        type: type || 'GET',
        dataType: 'json'
      });
    }

    $(document).ready(function () {
      // 提交申请弹窗
      $('#applyForm .submit-btn').on('click', function (e) {
        e.preventDefault();
        var formData = {};
        formData.first_name = $('#a_first_name').val();
        formData.last_name = $('#a_last_name').val();
        formData.email = $('#a_email').val();
        formData.company = $('#a_company').val();
        formData.a_country = $('#a_country').val();
        formData.description = $('#a_description').val();

        if (!formData.first_name || !formData.last_name || !formData.email || !formData.company || !formData.a_country) {
          alert('Please fill in the required areas.')
          return;
        }

        if (!formData.email.match(emailRegEx)) {
          alert('Please fill in the correct email.')
          return;
        }

        ajax(baseUrl + "/gift", formData, "get").done(function (res, status, xhr) {
          var data = res.data
          if (!res.err) {
            $('#applyDialog').hide();
            $('#applyForm').submit();
          } else {
            alert(res.msg)
          }
        }).fail(function (xhr, errorType, error) {
          console.log(xhr, errorType, error);
          alert(error)
        });

      });
    });
  },
  methods: {
    updateSize() {
      const ww = window.innerWidth
      let zoom = 1;
      let size = 'L';
      if (ww > 1024) {
        zoom = 1;
        size = 'L';
      } else if (ww > 750) {
        zoom = ww / 1024;
        size = 'M';
      } else if (ww > 374) {
        zoom = ww / 750;
        size = 'S';
      } else {
        zoom = ww / 750;
        size = 'S XS';
      }

      this.zoom = zoom;
      this.size = size;
    }
  }
}
</script>

<style>
.body { position: relative; }
.body * { -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0; margin: 0; }
.body {
  overflow: hidden;
  overflow-y: auto;
  font-family: "Source Han Sans CN", "PingFang SC", "Microsoft Yahei", "SimHei", Helvetica Neue, Helvetica, Arial, sans-serif;
  background: #fff; font-size: 16px; color: #000; margin: 0; padding: 0;
  height: 100%;
}
.body.M { font-size: 14px; }
.body.S { font-size: 12px; }

a { text-decoration: none; }

#layout { width: 100%; }

.container { width: auto; max-width: 1200px; position: relative; margin-left: auto; margin-right: auto; }

.btn {
  display: inline-block; text-decoration: none;
  width: 200px; height: 40px; color: #ffffff; border-radius: 20px;
  text-align: center; line-height: 40px; background-color: #0d0d0d;
  vertical-align: top;
}
.btn.green { background-color: #96b521; }
.S .btn { width: 150px; height: 35px; border-radius: 15px; line-height: 30px; }
.XS .btn { width: 100px; height: 30px; border-radius: 15px; line-height: 30px; }

.L .hl, .M .hm, .S .hs { display: none !important; }
.L .vs, .M .vs { display: none !important; }
.S .vs { display: block !important; }

.form { width: 100%; margin: auto; padding-top: 20px; }
.form .field { border: 1px solid #bfbfbf; padding: 10px 15px; background-color: #fff; margin-top: 14px; display: flex;}
.form .field .label { font-size: 18px; line-height: 28px; color: #898989; text-transform: capitalize; width: 11em; border-right: 1px solid #888;}
.form .field .input { font-size: 18px; line-height: 28px; color: #434343; flex: 1; border: none; padding: 0 15px;}
.form .field select {display: block; flex: 1; border: 0; background: transparent;}
.form .submit-btn { width: 100%; font-size: 18px; color: #fff; border: none; background-color: #96b521; padding: 10px 20px; text-transform: uppercase; margin-top: 20px;}
.M .form { width: 100%; margin: auto; }
.M .form .field {  padding: 7px 15px; margin-top: 7px; }
.M .form .field .label { font-size: 14px; line-height: 20px; width: 45%; }
.M .form .field .input { font-size: 14px; line-height: 20px; width: 55%; }
.M .form .field select {display: block; border: 0; background: transparent; width: 55%;}
.S .form { width: 100%; margin: auto; }
.S .form .field {  padding: 7px 15px; margin-top: 7px; }
.S .form .field .label { font-size: 14px; line-height: 16px; width: 36%; }
.S .form .field .input { font-size: 14px; line-height: 16px;  width: 64%; }
.S .form .field select {display: block; flex: 1; border: 0; background: transparent;  width: 64%;}
.form .submit-btn { font-size: 14px; margin-top: 10px; cursor: pointer; }

.dialog { z-index: 1000; position: relative; top: 0; left: 0; width: 100%; height: 100%; background-color: #fff;display: flex; align-items: center; justify-content: center; }
.dialog > .container { max-width: 100%; position: relative; background-color: #fff; padding: 50px 20px 30px;}
.dialog .section-title { font-size: 26px; margin-bottom: 20px; text-align: center; }
.dialog .section-title::before { display: none; }
.dialog .tips { font-size: 14px; line-height: 1.8em; color: #666; text-align: center;  }
.dialog .menu-btn { z-index: 1; display: block; position: absolute; top: 15px; right: 15px; margin-top: 0;}
.M .dialog > .container { max-width: 100%; }
.M .dialog .section-title { font-size: 22px; margin-bottom: 20px; }
.S .dialog > .container { padding: 20px; }
.S .dialog .section-title { font-size: 22px; margin-bottom: 15px; }
.S .dialog .tips { font-size: 12px;}
.menu-btn { cursor: pointer; display: none; box-sizing: border-box; float: right; width: 30px; height: 30px; padding: 3px 4px; border: 2px solid #96b521; background-color: #96b521; vertical-align: middle; transition: all 0.5s; margin-top: 15px; }
.menu-btn .line { width: 18px; height: 3px; background-color: #fff; margin-top: 3px; margin-bottom: 3px; transition: all 0.5s; }
.menu-btn.active .line-1 { transform-origin: 3px 5px; transform: rotate(45deg); }
.menu-btn.active .line-2 { background-color: transparent; }
.menu-btn.active .line-3 { transform-origin: 1px -3px; transform: rotate(-45deg); }
</style>