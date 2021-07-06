package whatsub

import cats.syntax.all.*

/** @author Kevin Lee
  * @since 2021-06-18
  */
trait Convert[A, B] {
  def convert(a: A): Either[ConversionError, B]
}

object Convert {

  given apply[A, B](using Convert[A, B]): Convert[A, B] = summon[Convert[A, B]]

  def convert[A, B](from: A)(using Convert[A, B]): Either[ConversionError, B] =
    Convert[A, B].convert(from)

  given smiToSrtConvert: Convert[Smi, Srt] =
    smi =>
      if (smi.lines.isEmpty)
        ConversionError
          .NoContent(
            SupportedSub.Smi,
            s"""The smi titled "${smi.title}"""",
          )
          .asLeft[Srt]
      else
        Srt(
          for {
            (smiLine, index) <- smi.lines.zipWithIndex
            start             = smiLine.start.start
            end               = smiLine.end.end
            line              = smiLine.line.line
          } yield Srt.SrtLine(
            Srt.Index(index + 1),
            Srt.Start(start),
            Srt.End(end),
            Srt.Line(line),
          ),
        ).asRight[ConversionError]

  given srtToSmiConvert: Convert[Srt, Smi] =
    srt =>
      if (srt.lines.isEmpty)
        ConversionError
          .NoContent(
            SupportedSub.Srt,
            s"""The srt"""",
          )
          .asLeft[Smi]
      else
        Smi(
          Smi.Title(""),
          for {
            srtLine <- srt.lines
            start    = srtLine.start.start
            end      = srtLine.end.end
            line     = srtLine.line.line
          } yield Smi.SmiLine(Smi.Start(start), Smi.End(end), Smi.Line(line)),
        ).asRight[ConversionError]

}