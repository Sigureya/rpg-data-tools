import { AudioFileParams } from '@sigureya/rpgtypes';
export interface SystemSounds {
    cursor: AudioFileParams;
    ok: AudioFileParams;
    cancel: AudioFileParams;
    buzzer: AudioFileParams;
    equip: AudioFileParams;
    save: AudioFileParams;
    load: AudioFileParams;
    battleStart: AudioFileParams;
    escape: AudioFileParams;
    enemyAttack: AudioFileParams;
    enemyDamage: AudioFileParams;
    enemyCollapse: AudioFileParams;
    bossCollapse1: AudioFileParams;
    bossCollapse2: AudioFileParams;
    actorDamage: AudioFileParams;
    actorCollapse: AudioFileParams;
    playRecovery: AudioFileParams;
    playMiss: AudioFileParams;
    playEvasion: AudioFileParams;
    playMagicEvasion: AudioFileParams;
    playReflection: AudioFileParams;
    shop: AudioFileParams;
    useItem: AudioFileParams;
    useSkill: AudioFileParams;
}
