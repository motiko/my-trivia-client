
export default function(){
  this.transition(
    this.toRoute('admin.questions'),
    this.use('toRight'),
    this.reverse('toLeft')
  )
  this.transition(
    this.fromRoute('admin.index'),
    this.toRoute('admin.questions'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
