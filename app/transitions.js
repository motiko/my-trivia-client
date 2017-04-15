
export default function(){
  this.transition(
    this.toRoute('admin.questions'),
    this.use('toRight'),
    this.reverse('toLeft')
  )
}
