package whatsub.convert

import cats.Show
import cats.syntax.show.*
import whatsub.SupportedSub

/** @author Kevin Lee
  * @since 2021-06-18
  */
enum ConversionError {
  case NoContent(supportedSub: SupportedSub, subtitleInfo: String)
}
object ConversionError {

  def noContent(supportedSub: SupportedSub, subtitleInfo: String): ConversionError =
    ConversionError.NoContent(supportedSub, subtitleInfo)

  given conversionErrorShow: Show[ConversionError] = _.render

  extension (conversionError: ConversionError) {
    def render: String = conversionError match {
      case ConversionError.NoContent(supportedSub, subtitleInfo) =>
        s"$subtitleInfo of type ${supportedSub.show} has no content."
    }
  }
}
