(this["webpackJsonpreact-trello"]=this["webpackJsonpreact-trello"]||[]).push([[0],{16:function(e,t,a){e.exports=a(37)},21:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),d=(a(21),a(3)),s=a(4),o=a(1),c=a(6),u=a(5),h=a(14),p=a.n(h),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=-1;for(var a in e)e[a].number>t&&(t=e[a].number);return t+1},v=function(){return p.a.generate()},C=a(2),f=a(7),b=function(e){return e.text?r.a.createElement("span",{className:"tag"},e.text):null},g=function(e){return r.a.createElement(f.b,{draggableId:e.id,index:e.index},(function(t){return r.a.createElement("div",Object.assign({className:"card",ref:t.innerRef},t.draggableProps,t.dragHandleProps),r.a.createElement("div",{style:{marginBottom:"5px"}},e.tags.map((function(e,t){return r.a.createElement(b,{key:t,text:e})}))),r.a.createElement("p",{style:{margin:"0px"}},"#".concat(e.number," ").concat(e.description)))}))},y=function(e){var t;return r.a.createElement("button",{className:"btn btn-".concat(e.variant),onClick:e.onClick},null!==(t=e.icon)&&void 0!==t?t:null,r.a.createElement("span",null,e.text))},E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).formRef=r.a.createRef(),n.controlRef=r.a.createRef(),n.state={text:e.initialValue},n.handleOnChangeText=n.handleOnChangeText.bind(Object(o.a)(n)),n.handleOnSubmit=n.handleOnSubmit.bind(Object(o.a)(n)),n.handleOnKeyDown=n.handleOnKeyDown.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){null!==this.controlRef.current&&this.controlRef.current.focus()}},{key:"handleOnChangeText",value:function(e){this.setState({text:e.target.value})}},{key:"handleOnSubmit",value:function(e){e.preventDefault(),this.props.onClickSubmit(this.state.text),this.setState({text:""})}},{key:"handleOnKeyDown",value:function(e){"Enter"===e.key&&this.handleOnSubmit(e)}},{key:"render",value:function(){return r.a.createElement("form",{ref:this.formRef,className:"form form-".concat(this.props.type)},"list"===this.props.type||"labels"===this.props.type?r.a.createElement("input",{type:"text",value:this.state.text,placeholder:this.props.placeholder,onChange:this.handleOnChangeText,className:"form-input",ref:this.controlRef}):r.a.createElement("textarea",{type:"text",value:this.state.text,placeholder:this.props.placeholder,onChange:this.handleOnChangeText,className:"form-textarea",onKeyDown:this.handleOnKeyDown,ref:this.controlRef}),r.a.createElement("div",{className:"form-actions"},r.a.createElement(y,{text:this.props.buttonText,onClick:this.handleOnSubmit,variant:"success"}),this.props.onClickCancel&&r.a.createElement(C.d,{className:"form-cancel-action",onClick:this.props.onClickCancel})))}}]),a}(n.Component);E.defaultProps={initialValue:"",placeholder:"",buttonText:"",onClickSubmit:function(){return null}};var O=E;var k=function(e){var t,a,i=e.title,l=void 0===i?"":i,d=e.children,s=void 0===d?null:d,o=e.onClickOutside,c=void 0===o?function(){return null}:o,u=e.offset,h=void 0===u?{}:u,p=Object(n.useRef)(null);return function(e,t){var a=Object(n.useCallback)((function(a){var n;(null===e||void 0===e||null===(n=e.current)||void 0===n?void 0:n.contains(a.target))||"function"!==typeof t||t()}),[e,t]);Object(n.useEffect)((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[a])}(p,c),r.a.createElement("div",{ref:p,className:"popover",style:{marginTop:"".concat(null!==(t=null===h||void 0===h?void 0:h.top)&&void 0!==t?t:0,"px"),marginLeft:"".concat(null!==(a=null===h||void 0===h?void 0:h.left)&&void 0!==a?a:0,"px")}},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"popover-header"},r.a.createElement("h4",null,l)),r.a.createElement("hr",{className:"divider"})):null,s)},R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).editorRef=r.a.createRef(),n.state={isLabelEditOpen:!1,closeOnlyLabel:!1},n.handleOutsideClick=n.handleOutsideClick.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleOutsideClick",value:function(e){this.editorRef.current.contains(e.target)||(this.state.closeOnlyLabel?this.setState({closeOnlyLabel:!1}):this.props.onClickOutside())}},{key:"render",value:function(){var e,t,a,n,i,l,d=this;return r.a.createElement("div",{className:"editor-modal",onClick:this.handleOutsideClick},r.a.createElement("div",{ref:this.editorRef,style:{display:"flex",flexDirection:"row",position:"absolute",top:"".concat(null!==(e=null===(t=this.props)||void 0===t||null===(a=t.position)||void 0===a?void 0:a.top)&&void 0!==e?e:0,"px"),left:"".concat(null!==(n=null===(i=this.props)||void 0===i||null===(l=i.position)||void 0===l?void 0:l.left)&&void 0!==n?n:0,"px")}},r.a.createElement("div",null,r.a.createElement(O,{type:"editor",initialValue:this.props.initialValue,buttonText:"Save",onClickSubmit:this.props.onSaveCard})),r.a.createElement("ul",{className:"editor-actions"},r.a.createElement("li",{className:"editor-action"},r.a.createElement(y,{text:"Edit Labels",icon:r.a.createElement(C.f,null),variant:"editor",onClick:function(){return d.setState({isLabelEditOpen:!0})}})),r.a.createElement("li",{className:"editor-action"},r.a.createElement(y,{text:"Copy",icon:r.a.createElement(C.e,null),variant:"editor",onClick:this.props.onCopyCard})),r.a.createElement("li",{className:"editor-action"},r.a.createElement(y,{text:"Archive",icon:r.a.createElement(C.c,null),variant:"editor",onClick:this.props.onArchiveCard})),this.state.isLabelEditOpen&&r.a.createElement(k,{title:"Labels",onClickOutside:function(){return d.setState({isLabelEditOpen:!1,closeOnlyLabel:!0})},offset:{top:-119}},r.a.createElement("div",null,r.a.createElement("ul",{className:"labels"},this.props.tags.map((function(e,t){return r.a.createElement("li",{key:t,className:"label",onClick:function(){return d.props.onRemoveTag(t)}},r.a.createElement(C.d,null),r.a.createElement("p",null,e))}))),r.a.createElement("h4",{className:"new-label-title"},"Add a new label"),r.a.createElement(O,{type:"labels",placeholder:"Enter a name for this label...",buttonText:"Add",onClickSubmit:this.props.onAddTag}))))))}}]),a}(n.Component);R.defaultProps={initialValue:"",tags:[],position:null,onSaveCard:function(){return null},onRemoveTag:function(){return null},onAddTag:function(){return null},onCopyCard:function(){return null},onArchiveCard:function(){return null},onClickOutside:function(){return null}};var A=R,T=function(e){return r.a.createElement("div",{className:"menu"},r.a.createElement(C.a,{onClick:e.onClick}),e.isOpen&&r.a.createElement(k,{title:"List Actions",onClickOutside:e.onClick},e.actions.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("ul",{className:"menu-actions"},e.map((function(e,t){var a=e.title,n=e.onClick;return r.a.createElement("li",{className:"menu-action",key:t,onClick:n},r.a.createElement("p",null,a))}))),r.a.createElement("hr",{className:"divider"}))}))))},x=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={creatingNewCard:!1,editCardId:null,editCardText:"",editCardTags:[]},n.cardRefs={},n.actions=[[{title:"Add Card...",onClick:function(){n.props.onToggleMenu(n.props.id),n.setState({creatingNewCard:!0})}},{title:"Copy List...",onClick:function(){return n.props.onCopyList(n.props.id)}}],[{title:"Move All Cards in This List...",onClick:function(){return n.props.onMoveAllCards(n.props.id)}},{title:"Archive All Cards in This List...",onClick:function(){return n.props.onRemoveAllCards(n.props.id)}}],[{title:"Archive This List",onClick:function(){return n.props.onRemoveList(n.props.id)}}]],n.handleAddNewCard=n.handleAddNewCard.bind(Object(o.a)(n)),n.handleCancelNewCard=n.handleCancelNewCard.bind(Object(o.a)(n)),n.handleCreateNewCard=n.handleCreateNewCard.bind(Object(o.a)(n)),n.handleEditCard=n.handleEditCard.bind(Object(o.a)(n)),n.handleCancelEdit=n.handleCancelEdit.bind(Object(o.a)(n)),n.handleCopyCard=n.handleCopyCard.bind(Object(o.a)(n)),n.handleSaveCard=n.handleSaveCard.bind(Object(o.a)(n)),n.handleArchiveCard=n.handleArchiveCard.bind(Object(o.a)(n)),n.handleRemoveTag=n.handleRemoveTag.bind(Object(o.a)(n)),n.handleAddTag=n.handleAddTag.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleAddNewCard",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e&&this.props.onAddCard(this.props.id,e),this.handleCancelNewCard()}},{key:"handleCancelNewCard",value:function(){this.setState({creatingNewCard:!1})}},{key:"handleCreateNewCard",value:function(){this.setState({creatingNewCard:!0})}},{key:"handleEditCard",value:function(e,t,a){this.setState({editCardId:e,editCardText:t,editCardTags:a})}},{key:"handleCancelEdit",value:function(){this.setState({editCardId:null,editCardText:"",editCardTags:[]})}},{key:"handleCopyCard",value:function(){this.props.onCopyCard(this.props.id,this.state.editCardId),this.handleCancelEdit()}},{key:"handleArchiveCard",value:function(){this.props.onRemoveCard(this.props.id,this.state.editCardId),this.handleCancelEdit()}},{key:"handleSaveCard",value:function(e){this.props.onEditCard(this.state.editCardId,e),this.handleCancelEdit()}},{key:"handleRemoveTag",value:function(e){this.props.onRemoveTag(this.state.editCardId,e)}},{key:"handleAddTag",value:function(e){e&&this.props.onAddTag(this.state.editCardId,e)}},{key:"renderHeader",value:function(e){var t=this,a=this.props,n=a.title,i=a.cards;return r.a.createElement("div",Object.assign({className:"cards-list-header"},e.dragHandleProps),r.a.createElement("div",{className:"cards-list-title"},r.a.createElement("h3",null,n),r.a.createElement(T,{isOpen:this.props.isMenuOpen,onClick:function(){return t.props.onToggleMenu(t.props.id)},actions:this.actions})),r.a.createElement("p",null,i.length," cards"))}},{key:"renderCards",value:function(){var e=this;return r.a.createElement(f.c,{droppableId:this.props.id,type:"card",direction:"vertical"},(function(t){return r.a.createElement("ul",Object.assign({className:"cards",ref:t.innerRef},t.droppableProps),e.props.cards.map((function(t,a){var n=t.id,i=t.number,l=t.description,d=t.tags;return r.a.createElement("li",{key:n,onClick:function(){return e.handleEditCard(n,l,d)},ref:function(t){t&&(e.cardRefs[n]=t)}},r.a.createElement(g,{id:n,index:a,number:i,description:l,tags:d}))})),t.placeholder)}))}},{key:"renderFooter",value:function(){return this.state.creatingNewCard?r.a.createElement(O,{type:"card",placeholder:"Enter a title for this card...",buttonText:"Add Card",onClickSubmit:this.handleAddNewCard,onClickCancel:this.handleCancelNewCard}):r.a.createElement("button",{className:"add-button add-card-button",onClick:this.handleCreateNewCard},r.a.createElement(C.b,null),r.a.createElement("p",null,"Add a new card"))}},{key:"render",value:function(){var e=this;return r.a.createElement(f.b,{draggableId:this.props.id,index:this.props.index},(function(t){return r.a.createElement("div",Object.assign({className:"cards-list",ref:t.innerRef},t.draggableProps),e.renderHeader(t),e.renderCards(),e.renderFooter(),e.state.editCardId&&r.a.createElement(A,{initialValue:e.state.editCardText,tags:e.state.editCardTags,position:{top:e.cardRefs[e.state.editCardId].getBoundingClientRect().top,left:e.cardRefs[e.state.editCardId].getBoundingClientRect().left},onSaveCard:e.handleSaveCard,onRemoveTag:e.handleRemoveTag,onAddTag:e.handleAddTag,onCopyCard:e.handleCopyCard,onArchiveCard:e.handleArchiveCard,onClickOutside:function(){return e.handleCancelEdit()}}))}))}}]),a}(n.Component);x.defaultProps={cards:null,isMenuOpen:!1,onToggleMenu:function(){return null},onAddCard:function(){return null},onRemoveCard:function(){return null},onRemoveList:function(){return null},onRemoveAllCards:function(){return null},onCopyList:function(){return null},onMoveAllCards:function(){return null},onCopyCard:function(){return null},onEditCard:function(){return null},onRemoveTag:function(){return null},onAddTag:function(){return null}};var N=x,j={cards:{k9atfadyp:{id:"k9atfadyp",number:1,description:"Create reusable React components",tags:["Priority: Medium","React"]},"8wu6w8mxg":{id:"8wu6w8mxg",number:2,description:"Learn React Hooks",tags:["React","Hooks"]},c96h9478v:{id:"c96h9478v",number:3,description:"Create Beautiful Drag and Drop Capability",tags:["Priority: Low","react-beautiful-dnd"]},rtwf8u120:{id:"rtwf8u120",number:4,description:"Learn React",tags:["Priority: High","React"]},vt6udjrpz:{id:"vt6udjrpz",number:5,description:"Write my first React component",tags:["Priority: Medium"]},ftrch98nt:{id:"ftrch98nt",number:6,description:"Create React App",tags:["Priority: Medium","create-react-app"]},bionb64f7:{id:"bionb64f7",number:7,description:"Write my first React component",tags:["Priority: Medium"]}},lists:{f0y88ej8u:{id:"f0y88ej8u",title:"Product Backlog",cardIds:["k9atfadyp","8wu6w8mxg","c96h9478v"]},"1528b8oyp":{id:"1528b8oyp",title:"Work In Progress",cardIds:["rtwf8u120","vt6udjrpz"]},yu0myoowp:{id:"yu0myoowp",title:"Done",cardIds:["ftrch98nt","bionb64f7"]}},listOrder:["f0y88ej8u","1528b8oyp","yu0myoowp"]},w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={lists:{},cards:{},listOrder:[],newListText:"",creatingNewList:!1,openMenuId:null},n.handleAddList=n.handleAddList.bind(Object(o.a)(n)),n.handleRemoveList=n.handleRemoveList.bind(Object(o.a)(n)),n.handleAddCard=n.handleAddCard.bind(Object(o.a)(n)),n.handleRemoveCard=n.handleRemoveCard.bind(Object(o.a)(n)),n.handleRemoveAllCards=n.handleRemoveAllCards.bind(Object(o.a)(n)),n.handleCopyCard=n.handleCopyCard.bind(Object(o.a)(n)),n.handleCopyList=n.handleCopyList.bind(Object(o.a)(n)),n.handleMoveAllCards=n.handleMoveAllCards.bind(Object(o.a)(n)),n.handleToggleMenu=n.handleToggleMenu.bind(Object(o.a)(n)),n.handleEditCard=n.handleEditCard.bind(Object(o.a)(n)),n.handleRemoveTag=n.handleRemoveTag.bind(Object(o.a)(n)),n.handleAddTag=n.handleAddTag.bind(Object(o.a)(n)),n.handleDragEnd=n.handleDragEnd.bind(Object(o.a)(n)),n.renderLists=n.renderLists.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({lists:j.lists,cards:j.cards,listOrder:j.listOrder})}},{key:"handleAddList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e.trim()){var t=v(),a=this.state,n=a.lists,r=a.listOrder;n[t]={id:t,title:e,cardIds:[]},r.push(t),this.setState({lists:n,listOrder:r,newListText:"",creatingNewList:!1})}else this.setState({newListText:"",creatingNewList:!1})}},{key:"handleRemoveList",value:function(e){var t=this.state,a=t.lists,n=t.listOrder,r=t.cards;a[e].cardIds.map((function(e){return delete r[e]})),delete a[e];var i=n.indexOf(e);i>-1&&n.splice(i,1),this.setState({lists:a,cards:r,listOrder:n})}},{key:"handleAddCard",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t.trim()){var a=this.state,n=a.lists,r=a.cards,i=v(),l=m(r);r[i]={id:i,number:l,description:t,tags:[]},n[e].cardIds.push(i),this.setState({lists:n,cards:r})}}},{key:"handleRemoveCard",value:function(e,t){var a=this.state,n=a.lists,r=a.cards;delete r[t];var i=n[e].cardIds.indexOf(t);i>-1&&n[e].cardIds.splice(i,1),this.setState({lists:n,cards:r})}},{key:"handleRemoveAllCards",value:function(e){var t=this.state,a=t.lists,n=t.cards;a[e].cardIds.map((function(e){return delete n[e]})),a[e].cardIds=[],this.setState({lists:a,cards:n,openMenuId:null})}},{key:"handleCopyCard",value:function(e,t){var a=this.state,n=a.lists,r=a.cards,i=v(),l=m(r);r[i]={id:i,number:l,description:r[t].description,tags:r[t].tags},n[e].cardIds.push(i),this.setState({lists:n,cards:r})}},{key:"handleCopyList",value:function(e){var t=this.state,a=t.lists,n=t.cards,r=t.listOrder,i=a[e].cardIds.map((function(e){var t=n[e],a=v(),r=m(n);return n[a]={id:a,number:r,description:t.description,tags:t.tags},a})),l=v();a[l]={id:l,title:"(Copy) - ".concat(a[e].title),cardIds:i},r.push(l),this.setState({lists:a,cards:n,listOrder:r,openMenuId:null})}},{key:"handleMoveAllCards",value:function(e){var t=this.state,a=t.lists,n=t.cards;for(var r in a)a[r].cardIds=r===e?Object.keys(n):[];this.setState({lists:a,openMenuId:null})}},{key:"handleToggleMenu",value:function(e){this.setState({openMenuId:this.state.openMenuId!==e?e:null})}},{key:"handleEditCard",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=this.state.cards;a[e].description=t,this.setState({cards:a})}},{key:"handleRemoveTag",value:function(e,t){var a=this.state.cards;a[e].tags.splice(t,1),this.setState({cards:a})}},{key:"handleAddTag",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=this.state.cards;a[e].tags.push(t),this.setState({cards:a})}},{key:"handleDragEnd",value:function(e){var t=e.destination,a=e.source,n=e.draggableId,r=e.type;if(t&&(a.droppableId!==t.droppableId||a.index!==t.index))if("list"===r){var i=this.state.listOrder;i.splice(a.index,1),i.splice(t.index,0,n),this.setState({listOrder:i})}else if("card"===r){var l=this.state.lists;l[a.droppableId].cardIds.splice(a.index,1),l[t.droppableId].cardIds.splice(t.index,0,n),this.setState({lists:l})}}},{key:"renderLists",value:function(){var e=this,t=this.state,a=t.listOrder,n=t.lists,i=t.cards;return r.a.createElement(f.c,{droppableId:"droppable-lists",direction:"horizontal",type:"list"},(function(t){return r.a.createElement("ul",Object.assign({className:"board-lists",ref:t.innerRef},t.droppableProps),a.map((function(t,a){var l=n[t].cardIds.map((function(e){return i[e]}));return r.a.createElement("li",{key:t},r.a.createElement(N,{id:t,index:a,title:n[t].title,cards:l,isMenuOpen:e.state.openMenuId===t,onToggleMenu:e.handleToggleMenu,onAddCard:e.handleAddCard,onRemoveCard:e.handleRemoveCard,onRemoveList:e.handleRemoveList,onRemoveAllCards:e.handleRemoveAllCards,onCopyList:e.handleCopyList,onMoveAllCards:e.handleMoveAllCards,onCopyCard:e.handleCopyCard,onEditCard:e.handleEditCard,onRemoveTag:e.handleRemoveTag,onAddTag:e.handleAddTag}))})),t.placeholder)}))}},{key:"renderNewList",value:function(){var e=this;return this.state.creatingNewList?r.a.createElement(O,{type:"list",placeholder:"Enter a title for this list...",buttonText:"Add List",onClickSubmit:this.handleAddList,onClickCancel:function(){return e.setState({creatingNewList:!1})}}):r.a.createElement("button",{className:"add-button",onClick:function(){return e.setState({creatingNewList:!0})}},r.a.createElement(C.b,null),r.a.createElement("p",null,"Add a new list"))}},{key:"render",value:function(){return r.a.createElement(f.a,{onDragEnd:this.handleDragEnd},r.a.createElement("div",{className:"board"},this.renderLists(),this.renderNewList()))}}]),a}(n.Component),L=function(){return r.a.createElement("header",{className:"app-header"},r.a.createElement("h1",null,"React Trello"))},S=function(){return r.a.createElement("footer",{className:"app-footer"},"Looking for help? Head over to the ",r.a.createElement("a",{href:"https://discord.com/channels/742753758450155662/748890194136137838"},"Discord server")," and ask the community.")};a(36);var I=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(L,null),r.a.createElement(w,null),r.a.createElement(S,null))};l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d137ff71.chunk.js.map