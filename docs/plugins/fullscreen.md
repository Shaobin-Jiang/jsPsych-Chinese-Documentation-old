# fullscreen plugin

这个插件的作用是进入或退出全屏模式。由于安全问题，所有浏览器都要求在进入全屏模式前需要用户和浏览器交互。在jsPsych中，进入全屏模式需要用户点击按钮。退出全屏模式不需要用户和浏览器交互。

!!!warning "警告"
    Safari在全屏模式下不支持键盘输入。因此，jsPsych在Safari下不会启动全屏模式，实验会忽略使用fullscreen插件的试次。

## 参数

除了[适用于所有插件的参数](../overview/plugins.md#parameters-available-in-all-plugins#_3)，当前插件还接受以下参数。我们必须对默认值为 **undefined** 的参数进行赋值，而对于其他参数，如果不需要则不用进行赋值。

参数 | 类型 | 默认值 | 描述 
----------|------|---------------|------------
fullscreen_mode | 布尔 | `true` | 如果为true，则实验进入全屏模式；如果为false，则实验退出全屏模式。 
message | 字符串 | `<p>The experiment will switch to full screen mode when you press the button below</p>` | 呈现在确认进入全屏按钮上方的HTML内容。 
button_label | 字符串 |  'Continue' | 确认进入全屏按钮上的文本。 
delay_after | 数值 | 1000 | 进入全屏模式到结束当前试次的时间延迟。对于大多数浏览器，进入全屏模式后会呈现提示进入全屏的消息，这会影响我们的实验，而设置当前参数则可以规避该问题。

## 数据

除了[所有插件默认都会收集的数据](../overview/plugins.md#_4)，当前插件还会记录以下数据。

名称 | 类型 | 值 
-----|------|------
success | 布尔 | 如果浏览器支持全屏模式（即，不是Safari）则为true。

## 模拟模式

浏览器不允许通过代码进入全屏模式，这是为了防止一些恶意的行为。在`visual`模式中，当前试次会正常运行，也会模拟点击按钮，但是并不会进入/退出全屏。如果想要进入全屏模式，则需要对当前试次禁用模拟，并手动点击按钮。

## 示例


???+ example "进入和退出全屏模式"
    === "Code"
        ```javascript
        var enter_fullscreen = {
          type: jsPsychFullscreen,
          fullscreen_mode: true
        }

        var trial_in_fullscreen = {
          type: jsPsychHtmlButtonResponse,
          stimulus: 'This trial will be in fullscreen mode.',
          choices: ['Continue']
        }

        var exit_fullscreen = {
          type: jsPsychFullscreen,
          fullscreen_mode: false,
          delay_after: 0
        }

        var trial_after_fullscreen = {
          type: jsPsychHtmlButtonResponse,
          stimulus: 'This trial will NOT be in fullscreen mode.',
          choices: ['Continue']
        }
        ```

    === "Demo"
        <div style="text-align:center;">
          <iframe src="../../demos/jspsych-fullscreen-demo1.html" width="90%;" height="500px;" frameBorder="0"></iframe>
        </div>

    <a target="_blank" rel="noopener noreferrer" href="../../demos/jspsych-fullscreen-demo1.html">在新标签页中打开</a>
