<template  lang="md">
# InputNumber数字输入框

## 使用场景
1、数字专用输入框
2、支持限制输入整数数字范围
3、支持设置增减数字幅度
4、支持自定义框内提示文案
5、支持自定义输入框样式

## DEMO
<demo>
	<example title="InputNumber">
			<div id="container">
				<v-input-number
				:max-value="100"
				:min-value="3"
		        :step="2"
		        :is-disable="false"
		        text-tips="请输入结算周期天数"
				></v-input-number>
				<p>支持键盘输入周期天数，以2为步长，最小值为3，最大值为100</p>
				</br>
				<v-input-number
				:max-value="100"
				:min-value="-25"
				:input-value.sync="'6'"
		        :step="5"
		        class-name="input-define-class"
		        :is-disable="true"
		        size="normal"
				></v-input-number>
				<p>默认值为6，禁止手动输入，以5为步长，最小值为-25，最大值为100，自定义输入框与字体样式</p>
			</div>
	</example>
</demo>

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|max-value|Number|100|最大值|可选|
|min-value|Number|1|最小值|可选|
|input-value|String|空字符串|默认显示数值|可选|
|step| Number| 1|增减步长|可选|
|is-disable|Boolean|false|是否禁用键盘输入|可选|
|class-name| String|空字符串|自定义样式|可选|
|size| String|large|可选尺寸|可选|
|text-tips| String|请输入范围内整数|自定义提示文案|可选|
</template>
<script>
	import vInputNumber from '../components/inputNumber';
	export default {
	    components: {
	        vInputNumber
	    },
	    data() {
	        return {
	        };
	    },
	    methods: {
	    },
	    ready() {
	    }
	};

</script>
<style>
.input-define-class{
    color: blue;
    width: 190px;
    font-size: 20px;
}
</style>