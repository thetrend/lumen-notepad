<?php

namespace Database\Factories;

use App\Models\Note;
use Illuminate\Database\Eloquent\Factories\Factory;

class NoteFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Note::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
          'user_id' => 1,
          'title' => 'Vanity Fair Preface Excerpt by W.M. Thackeray',
          'body' => '<p>As the manager of the Performance sits before the curtain on the boards and looks into the Fair, a feeling of profound melancholy comes over him in his survey of the bustling place. There is a great quantity of eating and drinking, making love and jilting, laughing and the contrary, smoking, cheating, fighting, dancing and fiddling; there are bullies pushing about, bucks ogling the women, knaves picking pockets, policemen on the look-out, quacks (OTHER quacks, plague take them!) bawling in front of their booths, and yokels looking up at the tinselled dancers and poor old rouged tumblers, while the light-fingered folk are operating upon their pockets behind. Yes, this is VANITY FAIR; not a moral place certainly; nor a merry one, though very noisy. Look at the faces of the actors and buffoons when they come off from their business; and Tom Fool washing the paint off his cheeks before he sits down to dinner with his wife and the little Jack Puddings behind the canvas. The curtain will be up presently, and he will be turning over head and heels, and crying, "How are you?"</p>
          <p>A man with a reflective turn of mind, walking through an exhibition of this sort, will not be oppressed, I take it, by his own or other people\'s hilarity. An episode of humour or kindness touches and amuses him here and there—a pretty child looking at a gingerbread stall; a pretty girl blushing whilst her lover talks to her and chooses her fairing; poor Tom Fool, yonder behind the waggon, mumbling his bone with the honest family which lives by his tumbling; but the general impression is one more melancholy than mirthful. When you come home you sit down in a sober, contemplative, not uncharitable frame of mind, and apply yourself to your books or your business.</p>',
        ];
    }
}
