(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1557:function(t,e){t.exports={content:["section",["p","Modal dialogs."],["h2","When To Use"],["p","When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use ",["code","Modal"]," to create a new floating layer over the current page to get user feedback or display information. Additionally, if you need show a simple confirmation dialog, you can use ",["code","antd.Modal.confirm()"],", and so on."]],meta:{type:"Feedback",category:"Components",title:"Modal",filename:"components/modal/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","afterClose"],["td","Specify a function that will be called when modal is closed completely."],["td","function"],["td","-"],["td"]],["tr",["td","bodyStyle"],["td","Body style for modal body element. Such as height, padding etc."],["td","object"],["td","{}"],["td"]],["tr",["td","cancelText"],["td","Text of the Cancel button"],["td","string","|","ReactNode"],["td",["code","Cancel"]],["td"]],["tr",["td","centered"],["td","Centered Modal"],["td","Boolean"],["td",["code","false"]],["td","3.8.0"]],["tr",["td","closable"],["td","Whether a close (x) button is visible on top right of the modal dialog or not"],["td","boolean"],["td","true"],["td"]],["tr",["td","closeIcon"],["td","custom close icon"],["td","ReactNode"],["td","-"],["td","3.22.0"]],["tr",["td","confirmLoading"],["td","Whether to apply loading visual effect for OK button or not"],["td","boolean"],["td","false"],["td"]],["tr",["td","destroyOnClose"],["td","Whether to unmount child components on onClose"],["td","boolean"],["td","false"],["td","3.1.0"]],["tr",["td","footer"],["td","Footer content, set as ",["code","footer={null}"]," when you don't need default buttons"],["td","string","|","ReactNode"],["td","OK and Cancel buttons"],["td"]],["tr",["td","forceRender"],["td","Force render Modal"],["td","boolean"],["td","false"],["td","3.12.0"]],["tr",["td","getContainer"],["td","Return the mount node for Modal"],["td","HTMLElement ","|"," ",["code","() => HTMLElement"]," ","|"," Selectors ","|"," false"],["td","document.body"],["td","3.20.2"]],["tr",["td","mask"],["td","Whether show mask or not."],["td","Boolean"],["td","true"],["td"]],["tr",["td","maskClosable"],["td","Whether to close the modal dialog when the mask (area outside the modal) is clicked"],["td","boolean"],["td","true"],["td"]],["tr",["td","maskStyle"],["td","Style for modal's mask element."],["td","object"],["td","{}"],["td"]],["tr",["td","okText"],["td","Text of the OK button"],["td","string","|","ReactNode"],["td",["code","OK"]],["td"]],["tr",["td","okType"],["td","Button ",["code","type"]," of the OK button"],["td","string"],["td",["code","primary"]],["td"]],["tr",["td","okButtonProps"],["td","The ok button props"],["td",["a",{title:null,href:"/components/button"},"ButtonProps"]],["td","-"],["td","3.7.0"]],["tr",["td","cancelButtonProps"],["td","The cancel button props"],["td",["a",{title:null,href:"/components/button"},"ButtonProps"]],["td","-"],["td","3.7.0"]],["tr",["td","style"],["td","Style of floating layer, typically used at least for adjusting the position."],["td","object"],["td","-"],["td"]],["tr",["td","title"],["td","The modal dialog's title"],["td","string","|","ReactNode"],["td","-"],["td"]],["tr",["td","visible"],["td","Whether the modal dialog is visible or not"],["td","boolean"],["td","false"],["td"]],["tr",["td","width"],["td","Width of the modal dialog"],["td","string","|","number"],["td","520"],["td"]],["tr",["td","wrapClassName"],["td","The class name of the container of the modal dialog"],["td","string"],["td","-"],["td"]],["tr",["td","zIndex"],["td","The ",["code","z-index"]," of the Modal"],["td","Number"],["td","1000"],["td"]],["tr",["td","onCancel"],["td","Specify a function that will be called when a user clicks mask, close button on top right or Cancel button"],["td","function(e)"],["td","-"],["td"]],["tr",["td","onOk"],["td","Specify a function that will be called when a user clicks the OK button"],["td","function(e)"],["td","-"],["td"]]]],["h4","Note"],["blockquote",["p","The state of Modal will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state everytime, set ",["code","destroyOnClose"]," on it."]],["h3","Modal.method()"],["p","There are five ways to display the information based on the content's nature:"],["ul",["li",["p",["code","Modal.info"]]],["li",["p",["code","Modal.success"]]],["li",["p",["code","Modal.error"]]],["li",["p",["code","Modal.warning"]]],["li",["p",["code","Modal.confirm"]]]],["p","The items listed above are all functions, expecting a settings object as parameter. The properties of the object are follows:"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autoFocusButton"],["td","Specify which button to autofocus"],["td","null","|","string: ",["code","ok"]," ",["code","cancel"]],["td",["code","ok"]],["td","3.10.0"]],["tr",["td","cancelText"],["td","Text of the Cancel button with Modal.confirm"],["td","string"],["td",["code","Cancel"]],["td"]],["tr",["td","centered"],["td","Centered Modal"],["td","Boolean"],["td",["code","false"]],["td","3.8.0"]],["tr",["td","className"],["td","className of container"],["td","string"],["td","-"],["td","3.1.1"]],["tr",["td","content"],["td","Content"],["td","string","|","ReactNode"],["td","-"],["td"]],["tr",["td","icon"],["td","custom icon (",["code","Added in 3.12.0"],")"],["td","string","|","ReactNode"],["td",["code",'<Icon type="question-circle">']],["td","3.12.0"]],["tr",["td","iconType"],["td","Icon ",["code","type"]," of the Icon component (deprecated after ",["code","3.12.0"],")"],["td","string"],["td",["code","question-circle"]],["td"]],["tr",["td","keyboard"],["td","Whether support press esc to close"],["td","Boolean"],["td","true"],["td","3.4.2"]],["tr",["td","mask"],["td","Whether show mask or not."],["td","Boolean"],["td","true"],["td","3.13.0"]],["tr",["td","maskClosable"],["td","Whether to close the modal dialog when the mask (area outside the modal) is clicked"],["td","Boolean"],["td",["code","false"]],["td"]],["tr",["td","okText"],["td","Text of the OK button"],["td","string"],["td",["code","OK"]],["td"]],["tr",["td","okType"],["td","Button ",["code","type"]," of the OK button"],["td","string"],["td",["code","primary"]],["td"]],["tr",["td","okButtonProps"],["td","The ok button props"],["td",["a",{title:null,href:"/components/button"},"ButtonProps"]],["td","-"],["td","3.10.0"]],["tr",["td","cancelButtonProps"],["td","The cancel button props"],["td",["a",{title:null,href:"/components/button"},"ButtonProps"]],["td","-"],["td","3.10.0"]],["tr",["td","title"],["td","Title"],["td","string","|","ReactNode"],["td","-"],["td"]],["tr",["td","width"],["td","Width of the modal dialog"],["td","string","|","number"],["td","416"],["td"]],["tr",["td","zIndex"],["td","The ",["code","z-index"]," of the Modal"],["td","Number"],["td","1000"],["td"]],["tr",["td","onCancel"],["td","Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed"],["td","function"],["td","-"],["td"]],["tr",["td","onOk"],["td","Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed"],["td","function"],["td","-"],["td"]]]],["p","All the ",["code","Modal.method"],"s will return a reference, and then we can update and close the modal dialog by the reference."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> modal <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodal<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'Updated title\'</span><span class="token punctuation">,</span>\n  content<span class="token punctuation">:</span> <span class="token string">\'Updated content\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodal<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","const modal = Modal.info();\n\nmodal.update({\n  title: 'Updated title',\n  content: 'Updated content',\n});\n\nmodal.destroy();"]],["style","\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n}\n"],["ul",["li",["p",["code","Modal.destroyAll"]]]],["p",["code","Modal.destroyAll()"]," could destroy all confirmation modal dialogs(Modal.info/Modal.success/Modal.error/Modal.warning/Modal.confirm). Usually, you can use it in router change event to destroy confirm modal dialog automatically without use modal reference to close( it's too complex to use for all modal dialogs)"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> browserHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// router change</span>\nbrowserHistory<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  Modal<span class="token punctuation">.</span><span class="token function">destroyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { browserHistory } from 'react-router';\n\n// router change\nbrowserHistory.listen(() => {\n  Modal.destroyAll();\n});"]]]}}}]);