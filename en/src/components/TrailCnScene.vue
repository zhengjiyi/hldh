<template>
  <div :class="['body', size]">
    <div id="applyFormDialog" class="dialog section">
      <div class="container">
        <h2 class="section-title">产品咨询</h2>
        <p class="tips">感谢您的关注，请填写以下表格，信息填写完整之后， <br /> 我们的销售人员会在两个工作日之内联系您。</p>
        <div class="section-content">
          <form method="POST" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" class="form"
            id="applyForm">
            <input type=hidden name="oid" value="00D7F000004d3MC" hidden />
            <!--  NOTE: 这个地方，网址改为点击提交后跳转的页面地址  -->
            <input type=hidden name="retURL" value="https://www.hytera.com/html/allstar/cn/trial.html#successed" hidden />
            <input type="hidden" maxlength="20"
              name="00N7F00000LflgN" size="20"
              value="7017F000000V0kRQAS"
              hidden />
            <div class="field">
              <label for="a_first_name" class="label">姓名:</label>
              <input id="a_first_name" name="first_name" type="text" class="input" />
            </div>
            <div class="field">
              <label for="a_company" class="label">公司:</label>
              <input id="a_company" name="company" type="text" class="input" />
            </div>
            <div class="field">
              <label for="a_phone" class="label">手机:</label>
              <input class="input" id="a_phone" name="phone" type="text" />
            </div>
            <div class="field">
              <label for="a_email" class="label">邮箱:</label>
              <input id="a_email" name="email" type="text" class="input" />
            </div>
            <div class="field">
              <label for="a_city" class="label">城市:</label>
              <input id="a_city" name="00N7F00000M8C1y" type="text" class="input" />
            </div>
            <div class="field">
              <label for="a_description" class="label">需求描述:</label>
              <textarea id="a_description" name="description" type="text" class="input"></textarea>
            </div>
            <button type="submit" class="submit-btn">马上提交</button>
          </form>
        </div>
      <p class="tips"> <br /> 此活动最终解释权为海能达通信股份有限公司所有 </p>
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
        formData.company = $('#a_company').val();
        formData.phone = $('#a_phone').val();
        formData.email = $('#a_email').val();
        formData.city = $('#a_city').val();
        formData.description = $('#a_description').val();
        formData.campaign = '2019-poc-cn';
        formData.campaign_id = '7017F000000Hp8tQAC';

        if (!formData.first_name || !formData.phone || !formData.email || !formData.company || !formData.city) {
          alert('请完整填写信息')
          return;
        }

        if (!formData.email.match(emailRegEx)) {
          alert('请填写正确邮箱')
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
* { -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0; margin: 0; }
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